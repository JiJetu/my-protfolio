/* eslint-disable @typescript-eslint/no-explicit-any */

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decode } from "./helpers/jwtHelpers";

const AuthRoutes = ["/login"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  admin: [/^\/dashboard(\/.*)?$/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedToken = null;

  decodedToken = decode(accessToken) as any;

  const role = decodedToken?.role;

  if (role && roleBasedRoutes[role as Role]) {
    const routes = roleBasedRoutes[role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(
    new URL(
      pathname ? `/login?redirect=${pathname}` : "/dashboard",
      request.url
    )
  );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/dashboard/:page*"],
};
