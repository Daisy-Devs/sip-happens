import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sip-happens/shared"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
