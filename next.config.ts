import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // SiteGround blocks /_next/image (WAF treats it as an open proxy).
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/testimonials", destination: "/results", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
