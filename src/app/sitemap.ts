import type { MetadataRoute } from "next";
import { services, site, solutionAreas } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/how-we-work", "/solutions", ...solutionAreas.map((a) => a.href), "/results", "/about", "/blog", "/contact", "/invite-isaac-to-speak", "/free-seminar", ...services.map((s) => s.href)];
  const entries: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
  for (const post of getAllPosts()) {
    entries.push({ url: `${site.url}/blog/${post.slug}`, lastModified: post.date, changeFrequency: "yearly", priority: 0.5 });
  }
  return entries;
}
