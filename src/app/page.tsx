import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Compass,
  Factory,
  Handshake,
  Layers,
  Phone,
  Search,
  Sprout,
  Target,
  UsersRound,
} from "lucide-react";
import { CtaBand, LogoMarquee, SectionHeading, TestimonialCard } from "@/components/sections";
import { differences, method, proofPoint, site, solutionAreas, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const problems = [
  {
    icon: Target,
    title: "Leadership effectiveness",
    text: "Supervisors and managers who were promoted for their skills, not taught how to lead people.",
  },
  {
    icon: UsersRound,
    title: "Workforce performance",
    text: "Turnover, absenteeism, low engagement, and expectations that aren't landing on the floor.",
  },
  {
    icon: BarChart3,
    title: "Organizational performance",
    text: "Productivity and efficiency that stall because leadership, culture, and process are out of step.",
  },
  {
    icon: Compass,
    title: "Strategic change",
    text: "Growth, succession, and change that need a clear plan and leaders who can carry it through.",
  },
];

const differenceIcons = [Layers, Search, Handshake, UsersRound, Factory, Sprout];

export default function Home() {
  return (
    <div>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -top-40 -left-40 -z-10 h-[520px] w-[520px] rounded-full bg-navy blur-3xl" />
        <div aria-hidden className="absolute right-0 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl" />

        <div className="container-x grid items-center gap-16 pt-16 pb-20 sm:pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-7">
            <p className="eyebrow rise text-gold">{site.tagline}</p>
            <h1 className="font-display rise rise-1 mt-6 text-5xl leading-[1.04] font-medium sm:text-6xl lg:text-[4.25rem]">
              Strengthen organizational performance <em className="text-gold">through people.</em>
            </h1>
            <p className="rise rise-2 mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Boutique leadership and organizational performance consulting built around your people, culture,
              challenges, and business goals.
            </p>
            <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                Let&apos;s talk about your organization
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/how-we-work" className="btn-ghost-light">
                Discover the Success Plus approach
              </Link>
            </div>
            <a
              href={site.phoneHref}
              className="rise rise-3 mt-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Prefer to talk? Call <span className="font-semibold text-white">{site.phone}</span>
            </a>
          </div>

          {/* Visual */}
          <div className="rise rise-2 relative mx-auto w-full max-w-md lg:col-span-5">
            <div className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-navy to-navy-dark p-8 ring-1 ring-white/10 sm:aspect-[4/5]">
              <div aria-hidden className="bg-grid absolute inset-0 rounded-[2rem]" />
              <Image
                src="/images/book-cover.webp"
                alt="Improving Profits Through People, by Isaac Russell"
                width={305}
                height={410}
                priority
                className="relative mx-auto mt-0 w-[56%] -rotate-3 drop-shadow-[0_30px_30px_rgb(0_0_0/0.5)] sm:mt-4 sm:w-[68%]"
              />
              <div className="float absolute -bottom-6 -left-4 flex items-center gap-4 rounded-2xl bg-white p-3 pr-6 text-ink shadow-2xl sm:-left-10">
                <Image
                  src="/images/isaac-portrait.webp"
                  alt="Isaac Russell"
                  width={400}
                  height={400}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <p className="font-semibold">Isaac Russell</p>
                  <p className="text-xs text-muted-foreground">Founder &amp; CEO · Organizational Performance Advisor</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-3 rounded-2xl bg-gold px-4 py-3 text-ink shadow-xl sm:-right-8">
                <p className="font-display text-3xl leading-none font-semibold">{proofPoint.value}</p>
                <p className="mt-1 text-[11px] font-semibold tracking-wider uppercase">Turnover reduced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* ------------------------------------------------------- Promise */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our promise" title="Every organization is unique. So is our approach." />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:pt-10">
            <p className="text-xl text-ink">
              When performance falls short, the answer isn&apos;t always another training program.
            </p>
            <p>
              Success Plus doesn&apos;t begin with a standardized program. We listen, assess, and analyze, then build a
              solution around your people, culture, challenges, and business objectives.
            </p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {site.promise.map((p) => (
                <li key={p} className="rounded-full bg-lavender px-4 py-2 text-sm font-semibold text-navy">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ What we solve */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we help solve"
            title="The people challenges behind your performance numbers."
            intro="We work alongside executives, HR leaders, plant managers, supervisors, and emerging leaders."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal rounded-3xl bg-white p-7 ring-1 ring-border">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-gold">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display mt-6 text-xl font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {solutionAreas.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group reveal relative overflow-hidden rounded-3xl bg-navy p-8 text-white transition-transform hover:-translate-y-1"
              >
                <Image src={a.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-15 mix-blend-luminosity transition-opacity group-hover:opacity-25" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
                <div className="relative">
                  <p className="eyebrow text-gold">Solutions</p>
                  <h3 className="font-display mt-4 text-2xl font-medium">{a.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{a.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Explore {a.name.toLowerCase()}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- The difference */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x">
          <SectionHeading
            tone="light"
            eyebrow="The Success Plus difference"
            title="A trusted extension of your leadership team."
            intro="Our role goes beyond delivering training and walking away."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {differences.map((d, i) => {
              const Icon = differenceIcons[i];
              return (
                <li key={d.title} className="bg-ink p-8">
                  <Icon className="h-6 w-6 text-gold" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{d.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------- How we work */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="How we work" title="Seven steps from first conversation to lasting change." />
            <Link href="/how-we-work" className="btn-ghost-dark shrink-0 self-start lg:self-auto">
              See the full approach
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {method.map((m, i) => (
              <li key={m.step} className="reveal relative rounded-2xl border border-border p-5">
                <span className="font-display text-sm font-semibold text-gold-dark">0{i + 1}</span>
                <p className="font-display mt-2 text-xl font-medium text-ink">{m.step}</p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------ Results */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Proof & results" title="Measured in behavior change and business outcomes." />
            <div className="reveal mt-10 rounded-3xl bg-navy p-8 text-white">
              <p className="font-display text-6xl font-medium text-gold">{proofPoint.value}</p>
              <p className="mt-2 text-lg font-semibold">{proofPoint.label}</p>
              <p className="mt-3 leading-relaxed text-white/70">{proofPoint.text}</p>
            </div>
            <Link href="/results" className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-light">
              See client results
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <TestimonialCard className="reveal" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Meet Isaac */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-square max-w-lg rounded-[2rem] bg-lavender">
              <div aria-hidden className="absolute inset-10 rounded-full bg-gold/60 blur-2xl" />
              <Image
                src="/images/book-cover.webp"
                alt="Improving Profits Through People book cover"
                width={305}
                height={410}
                className="absolute top-1/2 left-1/2 w-[54%] -translate-x-1/2 -translate-y-1/2 rotate-2 drop-shadow-[0_30px_30px_rgb(20_21_47/0.35)]"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="From the factory floor to the C-suite" title="Meet Isaac Russell." />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Isaac&apos;s career began as an hourly factory worker. He experienced organizations from the ground up
                before becoming a trusted advisor to leaders at every level, with organizations including Coca-Cola,
                Tyson Foods, and Johnsonville.
              </p>
              <p>
                For more than {yearsInBusiness()} years he has partnered with leaders to find the people, leadership,
                and organizational issues standing between today&apos;s performance and tomorrow&apos;s potential. His
                book, <strong className="font-semibold text-ink">Improving Profits Through People</strong>, reflects
                the philosophy behind the work: organizations become stronger when they invest in their people.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn-navy">
                More about Isaac
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/invite-isaac-to-speak" className="btn-ghost-dark">
                Invite Isaac to speak
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
