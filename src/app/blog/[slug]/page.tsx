import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Phone } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { PostCard, PostImage } from "@/components/post-card";
import { getAllPosts, getFaqs, getPost, readingTime, renderMarkdown } from "@/lib/blog";
import { ogImage } from "@/lib/seo";
import { allServicePages, site, solutionAreas } from "@/lib/site";

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
  const faqs = getFaqs(post.body);
  const service =
    allServicePages.find((s) => s.href === post.service) ??
    solutionAreas.find((a) => a.href === post.service);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author, url: `${site.url}/about` },
    ...(service ? { about: { "@type": "Service", name: service.name, url: `${site.url}${service.href}`, provider: { "@type": "Organization", name: site.name } } } : {}),
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/logo-square.png` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    ...(post.image ? { image: `${site.url}${post.image}` } : {}),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
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

          {service && (
            <aside className="mx-auto mt-14 grid max-w-3xl overflow-hidden rounded-3xl bg-navy text-white sm:grid-cols-5">
              <div className="relative min-h-40 sm:col-span-2">
                <Image src={service.image} alt="" fill sizes="(min-width: 640px) 300px, 100vw" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent sm:bg-gradient-to-r" />
              </div>
              <div className="p-7 sm:col-span-3 sm:p-8">
                <p className="eyebrow text-gold">How Success Plus helps</p>
                <p className="font-display mt-3 text-2xl font-medium">{service.name}</p>
                <p className="mt-2 leading-relaxed text-white/75">{service.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-gold whitespace-nowrap">
                    Let&apos;s talk
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href={service.href} className="btn-ghost-light whitespace-nowrap">
                    Learn more
                  </Link>
                </div>
                <a href={site.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
                  <Phone className="h-4 w-4" aria-hidden />
                  Or call {site.phone}. The first conversation is a free needs assessment.
                </a>
              </div>
            </aside>
          )}

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
