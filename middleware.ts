// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

import { NextRequest, NextResponse, userAgent } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const { pathname, searchParams } = request.nextUrl;
  // console.log({ pathname, sort: searchParams.get("sort") });
  // return NextResponse.next();

  //redirect
  // return NextResponse.redirect(new URL("/mobile", request.url));

  //rewrite
  // return NextResponse.rewrite(new URL("/mobile", request.url));

  // Clone the URL to avoid modifying the original request
  const url = request.nextUrl.clone();

  // Extract device information using a reliable library
  const { device } = userAgent(request);
  const isMobile = device.type === "mobile";

  // Determine the appropriate pathname based on device type
  const pathname = isMobile ? "/m" : "/d";

  // Construct the full path without using the path module:
  const fullPath = new URL(pathname, request.url).toString();

  return NextResponse.rewrite(fullPath);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
  // matcher: "/about/:path*",
};
