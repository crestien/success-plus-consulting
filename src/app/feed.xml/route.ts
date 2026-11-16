import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS feed of blog articles. */
export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return [
        "<item>",
        `<title>${esc(p.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${esc(p.excerpt)}</description>`,
        p.date ? `<pubDate>${new Date(`${p.date.slice(0, 10)}T12:00:00Z`).toUTCString()}</pubDate>` : "",
        ...p.categories.map((c) => `<category>${esc(c)}</category>`),
        `<dc:creator>${esc(p.author)}</dc:creator>`,
        "</item>",
      ].join("");
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
<title>${esc(site.name)} Blog</title>
<link>${site.url}/blog</link>
<atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>
<description>${esc("Leadership, retention, diversity, and organizational performance insights from Isaac Russell.")}</description>
<language>en-us</language>
${items}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
