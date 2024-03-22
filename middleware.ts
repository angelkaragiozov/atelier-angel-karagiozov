import { NextRequest, NextResponse, userAgent } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, _event: undefined) {
  const url = request.nextUrl.clone();

  // Extract device information using a reliable library
  const { isBot, device } = userAgent(request);
  console.log(isBot);
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
