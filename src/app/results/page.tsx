import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, LogoMarquee, PageHero, TestimonialCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { proofPoint, testimonials } from "@/lib/site";

export const metadata = pageMeta(
  "Results",
  "Measurable results and client stories from organizations that worked with Isaac Russell and Success Plus Consulting.",
  "/results",
);

export default function ResultsPage() {
  const [first, ...rest] = testimonials;

  return (
    <div>
      <PageHero
        eyebrow="Results"
        title="Results our clients can speak to."
        subtitle="We measure success through behavior change and business outcomes. Here is what leaders say changed in their organizations."
        crumbs={[{ name: "Results" }]}
      >
        <Link href="/contact" className="btn-gold">
          Let&apos;s talk about your organization
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-navy-light">Featured result</p>
            <p className="font-display mt-4 text-7xl font-medium text-ink sm:text-8xl">{proofPoint.value}</p>
            <p className="mt-2 text-xl font-semibold text-ink">{proofPoint.label}</p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-muted-foreground">{proofPoint.text}</p>
            <Link href={proofPoint.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-light">
              Read the Tyson Foods case study
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <h2 className="sr-only">Client testimonials</h2>
          <TestimonialCard testimonial={first} className="reveal mx-auto max-w-4xl" />
          {rest.length > 0 && (
            <div className="mt-8 columns-1 gap-6 md:columns-2 [&>*]:mb-6 [&>*]:break-inside-avoid">
              {rest.map((t) => (
                <TestimonialCard key={t.name} testimonial={t} size="md" className="reveal" />
              ))}
            </div>
          )}
        </div>
      </section>

      <LogoMarquee />
      <CtaBand title="Ready to see results like these?" text="Every organization is unique. Tell us about yours and we’ll listen first." />
    </div>
  );
}
