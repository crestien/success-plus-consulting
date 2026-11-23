import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ClientLogos, CtaBand, PhotoSlot } from "@/components/sections";
import { differences, method, proofPoint, site, solutionAreas, testimonials, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const problems = [
  {
    title: "Leadership effectiveness",
    text: "Supervisors and managers who were promoted for their skills, not taught how to lead people.",
  },
  {
    title: "Workforce performance",
    text: "Turnover, absenteeism, low engagement, and expectations that aren't landing on the floor.",
  },
  {
    title: "Organizational performance",
    text: "Productivity and efficiency that stall because leadership, culture, and process are out of step.",
  },
  {
    title: "Strategic change",
    text: "Growth, succession, and change that need a clear plan and leaders who can carry it through.",
  },
];

const featuredQuotes = [
  {
    quote:
      "I don’t make a habit of hiring consultants, because so few actually bring value to the table. Success Plus is the exception to the rule.",
    t: testimonials[1],
  },
  {
    quote: "The amazing part isn’t the improvement, it’s that the improvements lasted.",
    t: testimonials[3],
  },
];

export default function Home() {
  return (
    <div>
      {/* 1 ------------------------------------------- Brand positioning */}
      <section className="bg-navy-dark text-white">
        <div className="container-x grid items-center gap-12 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[2.6rem] leading-[1.06] font-medium sm:text-6xl lg:text-[4.5rem]">
              Strengthen organizational performance <em className="text-gold">through people.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {site.tagline}, built around your people, culture, challenges, and business goals.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link href="/contact" className="btn-gold self-start">
                Get a free needs assessment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 text-white/85 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden />
                or call <span className="border-b border-white/50 font-semibold text-white">{site.phone}</span>
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              <div>
                <p className="font-display text-6xl leading-none font-medium text-gold">{proofPoint.value}</p>
                <p className="mt-2 max-w-[11rem] text-sm text-white/85">drop in annual turnover at a Tyson Foods plant</p>
              </div>
              <figure>
                <blockquote className="font-display text-xl leading-snug">
                  &ldquo;Think of it as coaching rather than training.&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-sm text-white/75">
                  John Sherman, CEO – East Region, Coca-Cola Bottling Company United
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PhotoSlot
              className="aspect-[16/10] lg:aspect-[4/5]"
              note="Isaac Russell with a client leadership team on the plant floor"
              tone="dark"
            />
            <p className="mt-3 text-sm text-white/75">
              <strong className="font-semibold text-white">Isaac Russell</strong>, Founder &amp; CEO. Former hourly
              factory worker, advising leaders for {yearsInBusiness()} years.
            </p>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* 2 --------------------------------------------- Challenges we solve */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
              The people challenges behind your performance numbers.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We work alongside CEOs, presidents, HR and operations leaders, plant managers, and supervisors.
            </p>
          </div>
          <ul className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ title, text }, i) => (
              <li
                key={title}
                className="py-7 sm:pr-6 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-6 lg:[&:not(:last-child)]:pr-6"
              >
                <span className="sr-only">Challenge {i + 1}: </span>
                <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 ------------------------------------------- Three solutions */}
      <section className="bg-cream" aria-labelledby="solutions-heading">
        <div className="container-x pt-20 pb-4 sm:pt-28">
          <h2 id="solutions-heading" className="font-display max-w-3xl text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
            Three ways we strengthen your organization.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every engagement is built around your organization. Most clients draw on more than one.
          </p>
        </div>
        <div className="container-x divide-y divide-border">
          {solutionAreas.map((a, i) => (
            <article key={a.slug} className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
              <PhotoSlot
                className={`aspect-[16/10] lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}
                note={a.photo}
              />
              <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1" : ""}`}>
                <p className="font-display text-lg font-semibold text-navy">0{i + 1}</p>
                <h3 className="font-display mt-1 text-3xl font-medium text-ink sm:text-4xl">{a.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{a.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-ink">
                  {a.capabilities.slice(0, 5).map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
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

      {/* 4 --------------------------------- The Success Plus difference */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
              A trusted extension of your leadership team.
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-ink">
              When performance falls short, the answer isn&apos;t always another training program.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Success Plus doesn&apos;t begin with a standardized program. We listen, assess, and analyze, then build a
              solution around your people, culture, challenges, and business objectives.
            </p>
            <p className="font-display mt-6 text-lg text-navy italic">{site.promise.join(" ")}</p>
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
            {differences.map((d) => (
              <div key={d.title} className="border-t border-ink pt-4">
                <dt className="font-display text-xl font-medium text-ink">{d.title}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5 ----------------------------------- Results and testimonials */}
      <section className="bg-navy text-white">
        <div className="container-x grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="font-display text-[7rem] leading-none font-medium text-gold sm:text-[9rem]">{proofPoint.value}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-medium sm:text-4xl">
              {proofPoint.label}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{proofPoint.text}</p>
            <Link
              href={proofPoint.href}
              className="mt-7 inline-flex items-center gap-2 font-semibold text-gold underline underline-offset-4 hover:text-gold-light"
            >
              Read the Tyson Foods story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="space-y-12 lg:col-span-6 lg:pt-4">
            {featuredQuotes.map(({ quote, t }) => (
              <figure key={t.name} className="border-l-4 border-gold pl-7">
                <blockquote className="font-display text-2xl leading-snug sm:text-[1.7rem]">&ldquo;{quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-white/80">
                  <strong className="font-semibold text-white">{t.name}</strong>, {t.title}
                </figcaption>
              </figure>
            ))}
            <Link href="/results" className="inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4 hover:text-gold">
              More client results
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* 6 --------------------------------------------------- Meet Isaac */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <PhotoSlot className="aspect-[5/4]" note="Isaac coaching a supervisor on the floor, candid, natural light" />
          <div>
            <p className="font-display text-lg font-semibold text-navy">From the factory floor to the C-suite</p>
            <h2 className="font-display mt-2 text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
              Meet Isaac Russell.
            </h2>
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
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link href="/about" className="btn-navy self-start">
                More about Isaac
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/invite-isaac-to-speak" className="font-semibold text-navy underline underline-offset-4 hover:text-navy-light">
                Invite Isaac to speak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7 ---------------------------------------------------- How we work */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display max-w-2xl text-4xl leading-[1.1] font-medium text-ink sm:text-5xl">
              A customized process, from first conversation to lasting change.
            </h2>
            <Link href="/how-we-work" className="font-semibold text-navy underline underline-offset-4 hover:text-navy-light">
              See the full approach
            </Link>
          </div>
          <ol className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-7">
            {method.map((m, i) => (
              <li key={m.step} className="pt-5 pr-4 pb-6">
                <span className="font-display text-sm font-semibold text-navy">
                  0{i + 1}
                  <span aria-hidden className="mt-1.5 block h-[3px] w-6 bg-gold" />
                </span>
                <h3 className="font-display mt-3 text-xl font-medium text-ink">{m.step}</h3>
                <p className="mt-2 text-[0.95rem] leading-snug text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Secondary: speaking, events, publications */}
      <section className="border-t border-border bg-white py-10">
        <div className="container-x flex flex-col gap-4 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Also from Isaac: keynotes and events, the book, and the Success Plus blog.</p>
          <p className="flex flex-wrap gap-x-6 gap-y-2 font-semibold text-navy">
            <Link href="/invite-isaac-to-speak" className="underline underline-offset-4">Speaking &amp; events</Link>
            <Link href="/about" className="underline underline-offset-4">Publications</Link>
            <Link href="/blog" className="underline underline-offset-4">Blog</Link>
          </p>
        </div>
      </section>

      {/* 8 --------------------------------------------------- Invitation */}
      <CtaBand
        title="Start with a free needs assessment."
        text="A first conversation about your people, your plant, and what's getting in the way. We listen first, with no obligation."
      />
    </div>
  );
}
