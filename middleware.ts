import { NextResponse, type NextRequest } from "next/server";

// Protect the admin area with HTTP Basic Auth.
// Set ADMIN_PASSWORD in the project's environment variables.
export const config = { matcher: ["/admin/:path*", "/admin"] };

export function middleware(req: NextRequest): NextResponse {
  const expected = process.env.ADMIN_PASSWORD;
  const header = req.headers.get("authorization");

  if (expected && header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const password = decoded.slice(decoded.indexOf(":") + 1);
      if (password === expected) return NextResponse.next();
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="IJ Creditor Admin", charset="UTF-8"' },
  });
}
