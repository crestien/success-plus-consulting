import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { CtaBand, PageHero, SectionHeading, ServiceCard, TestimonialCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
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
      <PageHero
        eyebrow="Solutions"
        title={a.name}
        subtitle={a.summary}
        crumbs={[{ name: "Solutions", href: "/solutions" }, { name: a.name }]}
        aside={
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <Image src={a.image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent" />
          </div>
        }
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
            <h2 className="mt-12 text-sm font-semibold tracking-wider text-muted-foreground uppercase">Capabilities</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {a.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-2xl border border-border p-4 font-medium text-ink">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-3xl bg-navy p-8 text-white lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-medium">What changes</h2>
              <ul className="mt-6 space-y-4">
                {a.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-white/80">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    {o}
                  </li>
                ))}
              </ul>
              <Link href="/how-we-work" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light">
                How we work
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-20 sm:py-24">
          <div className="container-x">
            <SectionHeading eyebrow="Go deeper" title={`Inside ${a.name.toLowerCase()}.`} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.href} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x mx-auto max-w-4xl">
          <TestimonialCard />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
