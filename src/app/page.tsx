import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Handshake, Mic, Phone, Sprout, UsersRound } from "lucide-react";
import { CtaBand, LogoMarquee, SectionHeading, ServiceCard, TestimonialCard } from "@/components/sections";
import { services, site, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const stats = [
  { value: String(site.founded), label: "Founded by CEO Isaac Russell" },
  { value: `${yearsInBusiness()}+`, label: "Years helping leaders and their teams" },
  { value: "30%", label: "Turnover reduction for Tyson Foods" },
  { value: "$10K", label: "Cost to replace just one employee" },
];

const pillars = [
  {
    icon: Handshake,
    title: "Relationship oriented",
    text: "Not a classroom instrumental environment. We build trust between leaders and the people they lead.",
  },
  {
    icon: UsersRound,
    title: "On-the-job, hands-on",
    text: "Coaching happens where the work happens, through real interaction and mentoring on the floor.",
  },
  {
    icon: Sprout,
    title: "People over process",
    text: "Invest in your workforce and the bottom line takes care of itself. Assume nothing, teach everything.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -top-40 -left-40 -z-10 h-[520px] w-[520px] rounded-full bg-navy blur-3xl" />
        <div aria-hidden className="absolute right-0 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl" />

        <div className="container-x grid items-center gap-16 pt-16 pb-20 sm:pt-24 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-7">
            <p className="eyebrow rise text-gold">Leadership consulting since {site.founded}</p>
            <h1 className="font-display rise rise-1 mt-6 text-5xl leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
              Results-oriented <em className="text-gold not-italic sm:italic">leadership</em> strategies.
            </h1>
            <p className="rise rise-2 mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Coach to managers and supervisors. Advisor to CEOs and leaders. Success Plus helps America’s most
              recognized brands increase productivity, reduce turnover, and build stronger teams.
            </p>
            <div className="rise rise-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                Get a free needs assessment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/invite-isaac-to-speak" className="btn-ghost-light">
                <Mic className="h-4 w-4" aria-hidden />
                Invite Isaac to speak
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
            <div className="relative aspect-square rounded-[2rem] sm:aspect-[4/5] bg-gradient-to-br from-navy to-navy-dark p-8 ring-1 ring-white/10">
              <div aria-hidden className="bg-grid absolute inset-0 rounded-[2rem]" />
              <Image
                src="/images/book-cover.webp"
                alt="Improving Profits Through People, by Isaac Russell"
                width={305}
                height={410}
                priority
                className="relative mx-auto mt-0 w-[56%] -rotate-3 sm:mt-4 sm:w-[68%] drop-shadow-[0_30px_30px_rgb(0_0_0/0.5)]"
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
                  <p className="text-xs text-muted-foreground">Founder &amp; CEO · Author · Speaker</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-3 rounded-2xl bg-gold px-4 py-3 text-ink shadow-xl sm:-right-8">
                <p className="font-display text-3xl leading-none font-semibold">{yearsInBusiness()}+</p>
                <p className="mt-1 text-[11px] font-semibold tracking-wider uppercase">years of results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* --------------------------------------------------------- Stats */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="reveal flex flex-col border-l-2 border-gold pl-5">
                <dt className="order-2 mt-2 text-sm leading-snug text-muted-foreground">{s.label}</dt>
                <dd className="font-display order-1 text-5xl font-medium text-ink sm:text-6xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------ Services */}
      <section id="services" className="bg-cream py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Work with Isaac"
              title="Services that strengthen the people behind your profits."
              intro="Improve the communication and relationships between your leaders and your employees."
            />
            <Link href="/invite-isaac-to-speak" className="btn-navy shrink-0 self-start lg:self-auto">
              Book Isaac for your next event
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.href} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Success Model */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="light"
              eyebrow="The Success Model"
              title={
                <>
                  Think of it as <em className="text-gold">coaching</em>, not training.
                </>
              }
              intro="Isaac challenges the status quo with homespun wisdom, proving you don’t need complex theories to drive results. You need to connect with your team."
            />
            <ul className="mt-12 space-y-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="reveal flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1 leading-relaxed text-white/65">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:col-span-6 lg:col-start-7">
            <TestimonialCard tone="dark" className="reveal" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- About/book */}
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
            <SectionHeading
              eyebrow="From the factory floor to the C-suite"
              title="Meet Isaac Russell."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Isaac Russell is a dynamic force in leadership development and the Founder &amp; CEO of Success Plus
                Consulting. His journey began as an hourly factory worker, rising through the ranks to become a
                trusted advisor for Coca-Cola, Tyson Foods, and Johnsonville.
              </p>
              <p>
                He is also the author of{" "}
                <strong className="font-semibold text-ink">Improving Profits Through People</strong>, a practical guide
                to boosting your organization’s bottom line with a results-oriented leadership process.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-navy">
                <BookOpen className="h-4 w-4" aria-hidden />
                Get your copy of Isaac’s book
              </Link>
              <Link href="/about" className="btn-ghost-dark">
                More about Success Plus
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
