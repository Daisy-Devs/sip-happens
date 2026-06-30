import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sip-happens/shared"],
  images: {
    domains: ["images.unsplash.com"],
  }
};

export default nextConfig;