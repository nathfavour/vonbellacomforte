import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore build errors for production builds
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
