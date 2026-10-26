import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts ("/" English, "/es" Spanish) means no shared layout for 404s; see src/app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
