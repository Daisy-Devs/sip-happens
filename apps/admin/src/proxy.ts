import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/auth/:path*", "/menu-management", "/"],
};
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  if (!token && pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (token && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
