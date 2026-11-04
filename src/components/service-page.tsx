import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import { CtaBand, PageHero, SectionHeading, ServiceCard, TestimonialCard } from "@/components/sections";
import { services, site } from "@/lib/site";

interface ServicePageProps {
  href: string;
  subtitle: string;
  intro: string;
  children: React.ReactNode;
}

export function ServicePage({ href, subtitle, intro, children }: ServicePageProps) {
  const index = services.findIndex((s) => s.href === href);
  const service = services[index];
  const related = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  return (
    <>
      <PageHero
        eyebrow={subtitle}
        title={service.name}
        subtitle={intro}
        crumbs={[{ name: "Services", href: "/#services" }, { name: service.name }]}
        aside={
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image
                src={service.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-xl">
              Free needs assessment
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Contact Success Plus
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
              <div className="card-surface p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="font-display mt-5 text-2xl font-medium text-ink">Ready to get started?</h2>
                <p className="mt-2 text-muted-foreground">
                  Call today for a free needs assessment and find out which service will benefit your business most.
                </p>
                <div className="mt-6 grid gap-3">
                  <a href={site.phoneHref} className="btn-navy">
                    <Phone className="h-4 w-4" aria-hidden />
                    {site.phone}
                  </a>
                  <Link href="/contact" className="btn-ghost-dark">
                    Send us a message
                  </Link>
                </div>
              </div>
              <TestimonialCard className="hidden lg:block" />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Keep exploring" title="More ways we help leaders grow." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.href} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
