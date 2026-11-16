import type { Metadata } from "next";
import { site } from "@/lib/site";

/** 1200×630 share image (regenerate with scripts/og-image/generate.mjs). */
export const ogImage = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Success Plus Consulting: Strengthen Organizational Performance Through People",
};

/** Home page / default meta description (kept under ~160 characters). */
export const homeDescription =
  "Boutique leadership and organizational performance consulting. Success Plus develops stronger leaders, reduces turnover, and delivers measurable results.";

/** Stable JSON-LD ids so every page's structured data points at one entity. */
export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  isaac: `${site.url}/about#isaac-russell`,
  book: `${site.url}/about#book`,
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

/** Serialize JSON-LD safely for an inline <script>. */
export function ldJson(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbLd(crumbs: { name: string; href?: string }[], currentPath?: string) {
  const items = [{ name: "Home", href: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => {
      const href = c.href ?? (i === items.length - 1 ? currentPath : undefined);
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        ...(href ? { item: `${site.url}${href === "/" ? "" : href}` } : {}),
      };
    }),
  };
}

export function serviceLd(s: { name: string; href: string; summary: string; image?: string }, category?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${s.href}#service`,
    name: s.name,
    serviceType: s.name,
    ...(category ? { category } : {}),
    description: s.summary,
    url: `${site.url}${s.href}`,
    ...(s.image ? { image: `${site.url}${s.image}` } : {}),
    provider: { "@id": ids.org },
    areaServed: { "@type": "Country", name: "United States" },
  };
}
