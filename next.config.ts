import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
      { source: "/blog/feed", destination: "/feed.xml", permanent: true },
      { source: "/feed", destination: "/feed.xml", permanent: true },
      { source: "/blog/tag/:t*", destination: "/blog", permanent: true },
      { source: "/tag/:t*", destination: "/blog", permanent: true },
      { source: "/blog/author/:a*", destination: "/about", permanent: true },
      { source: "/author/:a*", destination: "/about", permanent: true },
      // Old WordPress pages
      { source: "/about-success-plus", destination: "/about", permanent: true },
      { source: "/qrcode", destination: "/about", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/news/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/podcasts", destination: "/blog", permanent: true },
      // Unpublished posts
      { source: "/blog/2017-09-05-000000", destination: "/blog", permanent: false },
      { source: "/blog/respect-goes-both-ways", destination: "/blog", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
      {
        source: "/:file(llms.txt|robots.txt|sitemap.xml|feed.xml)",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" }],
      },
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
