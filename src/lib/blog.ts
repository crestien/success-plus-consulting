import fs from "fs";
import path from "path";
import { marked } from "marked";

/**
 * Blog posts are Markdown files in /content/blog/<slug>.md with a small
 * YAML-style front matter block:
 *
 *   ---
 *   title: "Post title"
 *   date: 2017-09-19
 *   excerpt: "One or two sentences for cards and search results."
 *   image: /images/blog/2017/09/photo.jpg   (optional)
 *   categories: [Leadership, Retention]     (optional)
 *   author: Isaac Russell                    (optional)
 *   draft: true                              (optional: hides the post)
 *   ---
 *
 * The file name is the URL: content/blog/my-post.md -> /blog/my-post/
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  categories: string[];
  author: string;
  body: string;
};

function unquote(v: string) {
  const s = v.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1).replace(/\\"/g, '"');
  }
  return s;
}

function parseFrontMatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string | string[]> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, value] = kv;
    const v = value.trim();
    data[key] = v.startsWith("[") && v.endsWith("]")
      ? v.slice(1, -1).split(",").map(unquote).filter(Boolean)
      : unquote(v);
  }
  return { data, body: m[2] };
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  if (!fs.existsSync(BLOG_DIR)) return [];
  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, body } = parseFrontMatter(fs.readFileSync(path.join(BLOG_DIR, file), "utf8"));
      const str = (k: string) => (typeof data[k] === "string" ? (data[k] as string) : "");
      return {
        slug: file.replace(/\.md$/, ""),
        title: str("title"),
        date: str("date"),
        excerpt: str("excerpt"),
        image: str("image") || undefined,
        categories: Array.isArray(data.categories) ? data.categories : str("categories") ? [str("categories")] : [],
        author: str("author") || "Isaac Russell",
        body,
        draft: str("draft") === "true",
      };
    })
    .filter((p) => p.title && !p.draft)
    .map(({ draft: _draft, ...p }) => p satisfies Post)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false, gfm: true }) as string;
}

export function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function readingTime(md: string) {
  const words = md.replace(/[#>*_`\[\]()!-]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}
