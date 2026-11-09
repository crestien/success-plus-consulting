import { getAllPosts } from "@/lib/blog";
import { allServicePages, site, solutionAreas } from "@/lib/site";

export const dynamic = "force-static";

/** Plain-text site guide for AI assistants (https://llmstxt.org). */
export function GET() {
  const posts = getAllPosts();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Founded in ${site.founded} by Isaac Russell (Founder & CEO, author of "Improving Profits Through People"). Serves organizations nationwide, with deep experience in manufacturing and operations. Clients have included Coca-Cola bottlers, Tyson Foods, Johnsonville, Bonnie Plants, and American Seafoods.`,
    "",
    `Contact: ${site.phone} or ${site.url}/contact. The first conversation is a free needs assessment.`,
    "",
    "## Solutions",
    ...solutionAreas.map((a) => `- [${a.name}](${site.url}${a.href}): ${a.summary}`),
    "",
    "## Services",
    ...allServicePages.map((s) => `- [${s.name}](${site.url}${s.href}): ${s.summary}`),
    "",
    "## Key pages",
    `- [How we work](${site.url}/how-we-work): Listen, assess, analyze, customize, partner, measure, evolve.`,
    `- [Results](${site.url}/results): Client testimonials and a 30%+ turnover reduction at a Tyson Foods plant.`,
    `- [About Isaac Russell](${site.url}/about)`,
    `- [Invite Isaac to speak](${site.url}/invite-isaac-to-speak)`,
    "",
    "## Articles",
    ...posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.excerpt}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
