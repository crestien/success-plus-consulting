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
      // Old WordPress blog URLs
      { source: "/blog/page/:n", destination: "/blog", permanent: true },
      { source: "/blog/category/:c*", destination: "/blog", permanent: true },
      { source: "/category/:c*", destination: "/blog", permanent: true },
      { source: "/blog/feed", destination: "/blog", permanent: true },
      { source: "/news/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/news", destination: "/blog", permanent: true },
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
