import { NextRequest, NextResponse, userAgent } from "next/server";

export async function middleware(request: NextRequest) {
  // Clone the URL to avoid modifying the original request
  const url = request.nextUrl.clone();

  // Extract device information using a reliable library
  const { device } = userAgent(request);
  const isMobile = device.type === "mobile";

  // Determine the appropriate pathname based on device type
  const pathname = isMobile
    ? "/app/(www)/mobile/page"
    : "/app/(www)/desktop/page";

  // Construct the full path without using the path module:
  const fullPath = new URL(pathname, request.url).toString();

  return NextResponse.rewrite(fullPath);
}
