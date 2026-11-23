import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const plainText = (md: string) =>
  md
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Search index for the blog: generated once at build time, fetched lazily by the search box. */
export function GET() {
  const docs = getAllPosts().map((p) => ({
    id: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    tags: p.categories,
    date: p.date,
    body: plainText(p.body),
  }));
  return Response.json(docs, { headers: { "Cache-Control": "public, max-age=3600, s-maxage=3600" } });
}
