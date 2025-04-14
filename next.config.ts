import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

export default withNextIntl(nextConfig);
