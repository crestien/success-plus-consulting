import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, LogoMarquee, PageHero, TestimonialCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { testimonials } from "@/lib/site";

export const metadata = pageMeta(
  "Testimonials",
  "What CEOs, HR leaders, and executives say about working with Isaac Russell and Success Plus Consulting.",
  "/testimonials",
);

export default function TestimonialsPage() {
  const [first, ...rest] = testimonials;

  return (
    <div>
      <PageHero
        eyebrow="Testimonials"
        title="Results our clients can speak to."
        subtitle="Leaders from Coca-Cola, Tyson Foods, Harrisons Poultry, Rockline Industries, and more on what the Success Model did for their teams."
        crumbs={[{ name: "Testimonials" }]}
      >
        <Link href="/contact" className="btn-gold">
          Get a free needs assessment
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </PageHero>

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
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
      <CtaBand title="Ready to see results like these?" />
    </div>
  );
}
