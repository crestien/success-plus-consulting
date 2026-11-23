import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, PageHero, PhotoSlot } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { solutionAreas } from "@/lib/site";

export const metadata = pageMeta(
  "Solutions",
  "Leadership development, organizational performance, and strategic consulting, built around your people, culture, and business goals.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Solutions"
        title="Develop leaders. Improve performance. Strengthen the organization."
        subtitle="Every engagement is built for your organization, drawing on three areas of expertise. Most clients need a mix."
        crumbs={[{ name: "Solutions" }]}
      />

      <section className="bg-white">
        <div className="container-x divide-y divide-border">
          {solutionAreas.map((a, i) => (
            <article key={a.slug} className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
              <PhotoSlot
                className={`aspect-[16/10] lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}
                note={a.photo}
              />
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="font-display text-lg font-semibold text-navy">0{i + 1}</p>
                <h2 className="font-display mt-1 text-3xl font-medium text-ink sm:text-4xl">{a.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{a.summary}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {a.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-ink">
                      <Check className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
                <Link href={a.href} className="btn-navy mt-8">
                  Explore {a.name}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure where to start?" text="Tell us what's happening in your organization. We'll listen first, then recommend an approach." />
    </div>
  );
}
