import Link from "next/link";
import { ArrowRight, Phone, Plus } from "lucide-react";
import { CtaBand, FeaturedResult, PageHero, ServiceList, TestimonialCard } from "@/components/sections";
import { allServicePages, services, site, solutionAreas } from "@/lib/site";
import { ldJson, serviceLd } from "@/lib/seo";
import { serviceFaqs } from "@/lib/faqs";

interface ServicePageProps {
  href: string;
  subtitle: string;
  intro: string;
  children: React.ReactNode;
}

export function ServicePage({ href, subtitle, intro, children }: ServicePageProps) {
  const service = allServicePages.find((s) => s.href === href)!;
  const index = Math.max(0, services.findIndex((s) => s.href === href));
  const area = solutionAreas.find((a) => a.services.includes(href));
  const siblings = area ? services.filter((s) => area.services.includes(s.href) && s.href !== href) : [];
  const related = siblings.length > 0 ? siblings : [1, 2, 3].map((n) => services[(index + n) % services.length]);
  const faqs = serviceFaqs[href] ?? [];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(serviceLd(service, area?.name)) }} />
      <PageHero
        eyebrow={subtitle}
        title={service.name}
        subtitle={intro}
        crumbs={[
          { name: "Solutions", href: "/solutions" },
          ...(area ? [{ name: area.name, href: area.href }] : []),
          { name: service.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Let&apos;s talk
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
          <article className="prose-sp lg:col-span-7">{children}</article>

          <aside className="lg:col-span-5 lg:col-start-8">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="border-t-4 border-navy pt-6">
                <h2 className="font-display text-2xl font-medium text-ink">Start with a free needs assessment.</h2>
                <p className="mt-2 text-muted-foreground">
                  Every engagement is built around your organization. The first conversation is a free needs assessment.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <Link href="/contact" className="btn-navy self-start">
                    Send us a message
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold text-navy">
                    <Phone className="h-4 w-4" aria-hidden />
                    {site.phone}
                  </a>
                </div>
              </div>
              <TestimonialCard className="hidden pt-6 lg:block" size="md" />
            </div>
          </aside>
        </div>
      </section>

      {faqs.length > 0 && (
        <section aria-labelledby="faq-heading" className="border-t border-border bg-white py-20 sm:py-24">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: ldJson({
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
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 id="faq-heading" className="font-display text-4xl leading-[1.08] font-medium text-ink sm:text-5xl">
                {service.name} questions, answered.
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border lg:col-span-8">
              {faqs.map((f, i) => (
                <details key={f.q} className="group py-2" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">{f.q}</h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-navy transition group-open:rotate-45 group-open:bg-gold group-open:text-ink">
                      <Plus className="h-4 w-4" aria-hidden />
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-5 text-lg leading-relaxed text-muted-foreground">
                    {f.a.split(site.phone).map((part, j) => (
                      <span key={j}>
                        {j > 0 && (
                          <a href={site.phoneHref} className="font-semibold whitespace-nowrap text-navy underline-offset-4 hover:underline">
                            {site.phone}
                          </a>
                        )}
                        {part}
                      </span>
                    ))}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <FeaturedResult />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <h2 className="font-display max-w-3xl text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
            {area ? `More from ${area.name}.` : "More ways we help leaders grow."}
          </h2>
          <ServiceList items={related} className="mt-12" />
          {area && (
            <Link href={area.href} className="mt-10 inline-flex items-center gap-2 font-semibold text-navy underline underline-offset-4">
              See all of {area.name}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
