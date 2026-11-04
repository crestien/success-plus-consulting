import Link from "next/link";
import { ArrowRight, BarChart3, ClipboardList, Ear, Handshake, Microscope, RefreshCw, Wrench } from "lucide-react";
import { CtaBand, PageHero, SectionHeading, TestimonialCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { method, site } from "@/lib/site";

export const metadata = pageMeta(
  "How We Work",
  "Listen, assess, analyze, customize, partner, measure, evolve. The Success Plus approach to strengthening organizational performance through people.",
  "/how-we-work",
);

const icons = [Ear, ClipboardList, Microscope, Wrench, Handshake, BarChart3, RefreshCw];

export default function HowWeWorkPage() {
  return (
    <div>
      <PageHero
        eyebrow="How we work"
        title="We don’t start with a program. We start with your organization."
        subtitle={`${site.promise.join(" ")} That's why every Success Plus engagement follows the same seven steps, and ends up somewhere different.`}
        crumbs={[{ name: "How We Work" }]}
      >
        <Link href="/contact" className="btn-gold">
          Let&apos;s talk about your organization
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </PageHero>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <ol className="relative mx-auto max-w-4xl">
            <span aria-hidden className="absolute top-2 bottom-2 left-6 w-px bg-border sm:left-8" />
            {method.map((m, i) => {
              const Icon = icons[i];
              return (
                <li key={m.step} className="reveal relative flex gap-6 pb-12 last:pb-0 sm:gap-10">
                  <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-gold ring-8 ring-white sm:h-16 sm:w-16">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                  </span>
                  <div className="pt-1 sm:pt-3">
                    <p className="text-sm font-semibold tracking-wider text-gold-dark uppercase">Step 0{i + 1}</p>
                    <h2 className="font-display mt-1 text-3xl font-medium text-ink">{m.step}</h2>
                    <p className="mt-2 max-w-xl text-lg leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="The Success Model"
              title="The philosophy behind every step."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                People genuinely want to succeed. When they understand what is expected of them, have the skills to
                perform, and are supported by effective leadership, organizations become stronger.
              </p>
              <p>
                The Success Model is relationship oriented, built on on-the-job interaction and mentoring rather than a
                classroom. Lasting change happens when leaders are actively involved, expectations are clear,
                accountability is understood, and people are given the support to perform at their best.
              </p>
            </div>
          </div>
          <TestimonialCard tone="dark" />
        </div>
      </section>

      <CtaBand title="Let’s talk about your organization." />
    </div>
  );
}
