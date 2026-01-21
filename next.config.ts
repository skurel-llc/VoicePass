import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable turbopack - use webpack instead
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
