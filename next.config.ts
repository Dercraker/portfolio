import type { NextConfig } from "next";

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "i.pravatar.cc",
      },
      {
        hostname: "api.microlink.io",
      },
      {
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;
