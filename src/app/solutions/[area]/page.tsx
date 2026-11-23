import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { CtaBand, FeaturedResult, PageHero, PhotoSlot, ServiceList, TestimonialCard } from "@/components/sections";
import { ldJson, pageMeta, serviceLd } from "@/lib/seo";
import { services, site, solutionAreas } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[area]">): Promise<Metadata> {
  const { area } = await params;
  const a = solutionAreas.find((x) => x.slug === area);
  return a ? pageMeta(a.name, a.summary, a.href) : {};
}

export default async function SolutionAreaPage({ params }: PageProps<"/solutions/[area]">) {
  const { area } = await params;
  const a = solutionAreas.find((x) => x.slug === area);
  if (!a) notFound();
  const related = services.filter((s) => a.services.includes(s.href));

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(serviceLd(a)) }} />
      <PageHero
        eyebrow="Solutions"
        title={a.name}
        subtitle={a.summary}
        crumbs={[{ name: "Solutions", href: "/solutions" }, { name: a.name }]}
        aside={<PhotoSlot className="aspect-[4/3]" note={a.photo} tone="dark" />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Let&apos;s talk about your organization
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">{a.intro}</p>
            <h2 className="font-display mt-14 text-2xl font-medium text-ink">What it includes</h2>
            <ul className="mt-5 grid border-t border-ink sm:grid-cols-2 sm:gap-x-10">
              {a.capabilities.map((c) => (
                <li key={c} className="border-b border-border py-3.5 text-lg text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5 lg:col-start-8">
            <div className="border-t-4 border-navy pt-6 lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-medium text-ink">What changes</h2>
              <ul className="mt-6 space-y-4">
                {a.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-lg text-muted-foreground">
                    <Check className="mt-1.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
              <Link href="/how-we-work" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy underline underline-offset-4">
                How we work
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <FeaturedResult />

      {related.length > 0 && (
        <section className="bg-cream py-20 sm:py-24">
          <div className="container-x">
            <h2 className="font-display text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">Inside {a.name.toLowerCase()}.</h2>
            <ServiceList items={related} className="mt-12" />
          </div>
        </section>
      )}

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x mx-auto max-w-4xl">
          <TestimonialCard />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
