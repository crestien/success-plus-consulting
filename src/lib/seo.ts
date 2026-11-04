import type { Metadata } from "next";
import { site } from "@/lib/site";

export const ogImage = {
  url: "/images/book-header.jpg",
  width: 1536,
  height: 430,
  alt: "Improving Profits Through People by Isaac Russell",
};

/**
 * Per-page metadata with a canonical URL. Open Graph is set in full because
 * Next.js replaces (not merges) the parent's openGraph object.
 */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [ogImage],
    },
  };
}
