import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Mic, Phone, Target } from "lucide-react";
import { CtaBand, LogoMarquee, PageHero, SectionHeading, TestimonialCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { site, yearsInBusiness } from "@/lib/site";

export const metadata = pageMeta(
  "About Success Plus",
  "Success Plus is a leadership consulting firm founded in 1993 by CEO Isaac Russell, providing hands-on management training and coaching.",
  "/about",
);

const roles = [
  { icon: Target, title: "Executive coach", text: "Nationally recognized leadership and executive business coach." },
  { icon: Mic, title: "Keynote speaker", text: "Infectious energy and a down-to-earth style on any stage." },
  { icon: BookOpen, title: "Author", text: "Wrote Improving Profits Through People." },
  { icon: Award, title: "Mentor", text: "From first-line supervisors to the C-suite." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Discover how to become a great leader"
        title="Welcome to Success Plus."
        subtitle={`A leadership consulting firm founded in ${site.founded} by CEO Isaac Russell to provide hands-on management training and coaching to companies looking to build a better business.`}
        crumbs={[{ name: "About" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Work with Isaac
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
        </div>
      </PageHero>

      {/* Story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="reveal relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="rounded-[2rem] bg-cream p-8">
                <Image
                  src="/images/isaac-portrait.webp"
                  alt="Isaac Russell, Founder and CEO of Success Plus Consulting"
                  width={400}
                  height={400}
                  className="mx-auto w-full max-w-[280px] rounded-full ring-8 ring-white"
                />
                <p className="font-display mt-6 text-center text-2xl font-medium text-ink">Isaac Russell</p>
                <p className="text-center text-sm text-muted-foreground">Founder &amp; CEO, Success Plus Consulting</p>
              </div>
              <div className="absolute -top-4 -right-2 rounded-2xl bg-navy px-4 py-3 text-white shadow-xl">
                <p className="font-display text-3xl leading-none font-semibold text-gold">{yearsInBusiness()}+</p>
                <p className="mt-1 text-[11px] font-semibold tracking-wider uppercase">years leading</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our story" title="From the factory floor to the C-suite." />
            <div className="prose-sp mt-8">
              <p className="lead">
                Using a custom, personal, and hands-on approach (The Success Model) we have had the pleasure of helping
                some of America&apos;s most recognized brands, such as Coca-Cola, Tyson Foods, and Johnsonville,
                increase productivity, reduce turnover, and create stronger relationships between leaders and their
                employees.
              </p>
              <p>
                Isaac Russell is a dynamic force in leadership development. A true testament to the power of grit and
                growth, Isaac didn&apos;t just study leadership in a classroom; he lived it. His journey began as an
                hourly factory worker, where he learned the ropes from the ground up, eventually rising through the
                ranks to become a trusted advisor for some of America&apos;s most recognized brands.
              </p>
              <p>
                Isaac is an author, professional keynote speaker, mentor, and a nationally recognized leadership and
                executive business coach, with more than 30 combined years as a leader and business owner. He has
                helped organizations boost profits and create stronger relationships between leadership teams and
                their employees.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {roles.map(({ icon: Icon, title, text }) => (
                <li key={title} className="reveal rounded-2xl border border-border p-6">
                  <Icon className="h-6 w-6 text-navy" aria-hidden />
                  <p className="mt-4 font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Model */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="The Success Model"
              title="People over process."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                Isaac challenges the status quo with his &ldquo;homespun wisdom,&rdquo; proving that you don&apos;t need
                complex theories to drive results. You need to connect with your team.
              </p>
              <p>
                His methods have transformed first-line supervisors into confident leaders, slashed turnover rates,
                and skyrocketed productivity for major corporations.
              </p>
              <p>
                Isaac is also the celebrated author of <em className="text-white">Improving Profits Through People</em>,
                a practical guide that encapsulates his philosophy: when you invest in your workforce, the bottom line
                takes care of itself.
              </p>
            </div>
          </div>
          <div id="testimonials" className="scroll-mt-28">
            <TestimonialCard tone="dark" />
          </div>
        </div>
      </section>

      <LogoMarquee />

      <CtaBand
        title="Ready to work with Isaac?"
        text="Contact us for a free needs assessment and discover how Success Plus can help transform your organization."
      />
    </div>
  );
}
