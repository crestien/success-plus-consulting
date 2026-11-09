import { CtaBand, PageHero } from "@/components/sections";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Blog",
  "Leadership, retention, diversity, and organizational performance insights from Isaac Russell and Success Plus Consulting.",
  "/blog",
);

export default function BlogIndex() {
  const [first, ...rest] = getAllPosts();

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Insights on leading people well."
        subtitle="Practical thinking on leadership, retention, diversity, and building a culture where people and profits grow together."
        crumbs={[{ name: "Blog" }]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-x">
          {first ? (
            <>
              <h2 className="sr-only">Latest article</h2>
              <PostCard post={first} featured />
              {rest.length > 0 && (
                <>
                  <h2 className="eyebrow mt-16 mb-8 text-navy-light">More articles</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((p) => (
                      <PostCard key={p.slug} post={p} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <p className="text-center text-lg text-muted-foreground">New articles are coming soon.</p>
          )}
        </div>
      </section>

      <CtaBand title="Want these ideas working inside your organization?" text="Tell us what you’re facing. We’ll listen first, then help you build a plan." />
    </div>
  );
}
