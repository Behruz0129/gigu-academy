import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev (.next) va production build (.next-build) alohida — bir-birini buzmaydi
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
