/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "http",
        hostname: "openweathermap.org",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/device",
      },
    ];
  },
};

export default nextConfig;
