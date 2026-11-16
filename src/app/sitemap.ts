import type { MetadataRoute } from "next";
import { allServicePages as services, site, solutionAreas } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.date ? new Date(posts[0].date) : undefined;
  const pages = ["", "/how-we-work", "/solutions", ...solutionAreas.map((a) => a.href), "/results", "/about", "/blog", "/contact", "/invite-isaac-to-speak", "/free-seminar", ...services.map((s) => s.href)];
  const entries: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${site.url}${path}`,
    ...(path === "/blog" && latest ? { lastModified: latest } : {}),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/solutions") || services.some((s) => s.href === path) ? 0.8 : 0.7,
  }));
  for (const post of posts) {
    entries.push({
      url: `${site.url}/blog/${post.slug}`,
      ...(post.date ? { lastModified: new Date(post.date) } : {}),
      ...(post.image ? { images: [`${site.url}${post.image}`] } : {}),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }
  return entries;
}
