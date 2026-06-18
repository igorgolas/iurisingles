import { NextResponse, type NextRequest } from "next/server";
import { LAUNCHED } from "@/lib/flags";
import { locales, defaultLocale, isLocale, type Locale } from "@/lib/i18n";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

const PUBLIC_DOMAIN = "ijcreditor.com";

function requireAdminAuth(req: NextRequest): NextResponse {
  const expected = process.env.ADMIN_PASSWORD;
  const header = req.headers.get("authorization");
  if (expected && header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const password = decoded.slice(decoded.indexOf(":") + 1);
      if (password === expected) return NextResponse.next();
    } catch {
      // fall through
    }
  }
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="IJ Creditor Admin", charset="UTF-8"' },
  });
}

function detectLocale(req: NextRequest): Locale {
  const al = req.headers.get("accept-language") || "";
  for (const part of al.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

function withLocaleHeader(req: NextRequest, locale: Locale, host: string): NextResponse {
  const headers = new Headers(req.headers);
  headers.set("x-locale", locale);
  const res = NextResponse.next({ request: { headers } });
  if (!host.includes(PUBLIC_DOMAIN)) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export function middleware(req: NextRequest): NextResponse {
  const url = new URL(req.url);
  const { pathname } = url;
  const host = req.headers.get("host") || "";

  // Admin: always Basic-Auth protected, never localized/gated.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return requireAdminAuth(req);
  }

  // API, files and special routes: pass through.
  if (pathname.startsWith("/api") || pathname.includes(".") || pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  // Pre-launch holding page on the public domain.
  if (!LAUNCHED) {
    if (!host.includes(PUBLIC_DOMAIN)) {
      const res = NextResponse.next();
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
    if (pathname === "/coming-soon") return NextResponse.next();
    return NextResponse.rewrite(new URL("/coming-soon", req.url));
  }

  if (pathname === "/coming-soon") return NextResponse.next();

  // Locale routing.
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    return withLocaleHeader(req, seg, host);
  }

  // Not localized → redirect to the localized URL.
  const locale = detectLocale(req);
  const dest = new URL(`/${locale}${pathname === "/" ? "" : pathname}${url.search}`, req.url);
  return NextResponse.redirect(dest, 307);
}
