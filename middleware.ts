import { NextResponse, type NextRequest } from "next/server";
import { LAUNCHED } from "@/lib/flags";

// Run on everything except Next internals and obvious static files.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

// The public production domain. Until launch, this domain shows the holding page;
// the *.vercel.app URL keeps serving the full site for internal review.
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

export function middleware(req: NextRequest): NextResponse {
  const url = new URL(req.url);
  const { pathname } = url;
  const host = req.headers.get("host") || "";

  // Admin area: always Basic-Auth protected, never gated.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return requireAdminAuth(req);
  }

  if (LAUNCHED) return NextResponse.next();

  const isPublicDomain = host.includes(PUBLIC_DOMAIN);
  const isAsset = pathname.includes(".");
  const isApiOrHolding = pathname.startsWith("/api") || pathname === "/coming-soon";

  // Not the public domain (i.e. the vercel.app preview): serve the full site, but
  // keep it out of search engines until launch.
  if (!isPublicDomain) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  // Public domain, pre-launch: let API/holding page/assets through, gate the rest.
  if (isApiOrHolding || isAsset) return NextResponse.next();

  // Optional preview bypass on the public domain: ?preview=<ADMIN_PASSWORD>.
  const pass = process.env.ADMIN_PASSWORD;
  const query = url.searchParams.get("preview");
  if (pass && query === pass) {
    const res = NextResponse.next();
    res.cookies.set("preview", pass, { path: "/", httpOnly: true });
    return res;
  }
  if (pass && req.cookies.get("preview")?.value === pass) {
    return NextResponse.next();
  }

  // Gate: rewrite to the holding page; flag it so the layout drops nav/footer.
  const headers = new Headers(req.headers);
  headers.set("x-gate", "1");
  const rewriteUrl = new URL("/coming-soon", req.url);
  return NextResponse.rewrite(rewriteUrl, { request: { headers } });
}
