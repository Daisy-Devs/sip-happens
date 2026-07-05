import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/auth/login", "/menu-management", "/", "/categories"],
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value || false;
  
  if (!token && pathname !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (token && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
