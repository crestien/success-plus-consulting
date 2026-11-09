import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { PostCard, PostImage } from "@/components/post-card";
import { getAllPosts, getPost, readingTime, renderMarkdown } from "@/lib/blog";
import { ogImage } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      title: post.title,
      description: post.excerpt,
      url,
      authors: [post.author],
      images: post.image ? [{ url: post.image, alt: post.title }] : [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const others = all.filter((p) => p.slug !== post.slug);
  const related = [
    ...others.filter((p) => p.categories[0] === post.categories[0]),
    ...others.filter((p) => p.categories[0] !== post.categories[0]),
  ].slice(0, 3);
  const html = renderMarkdown(post.body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/logo-square.png` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={post.categories[0] ?? "Blog"}
        title={post.title}
        crumbs={[{ name: "Blog", href: "/blog" }, { name: post.title }]}
      >
        <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
          <span className="font-semibold text-white">{post.author}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {readingTime(post.body)} min read
          </span>
        </p>
      </PageHero>

      <div className="bg-white py-14 sm:py-20">
        <div className="container-x">
          {post.image && (
            <div className="relative mx-auto -mt-20 mb-14 aspect-[16/7] max-w-5xl overflow-hidden rounded-[2rem] bg-navy shadow-[0_32px_64px_-32px_rgb(20_21_47/0.45)] sm:-mt-28">
              <PostImage src={post.image} priority sizes="(min-width: 1024px) 1024px, 100vw" />
            </div>
          )}
          <div className="prose-sp prose-blog mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-light">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All articles
            </Link>
            {post.categories.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.categories.map((c) => (
                  <li key={c} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-navy">
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <div className="container-x">
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">Keep reading</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </article>
  );
}
