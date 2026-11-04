import type { MetadataRoute } from "next";
import { services, site, solutionAreas } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/how-we-work", "/solutions", ...solutionAreas.map((a) => a.href), "/results", "/about", "/contact", "/invite-isaac-to-speak", "/free-seminar", ...services.map((s) => s.href)];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
