import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Mic, Phone, UsersRound } from "lucide-react";
import { CtaBand, LogoMarquee, PageHero, SectionHeading, TestimonialCard } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { site, yearsInBusiness } from "@/lib/site";

export const metadata = pageMeta(
  "About Success Plus",
  "Success Plus Consulting is a boutique leadership and organizational performance consulting firm founded in 1993 by Isaac Russell.",
  "/about",
);

const roles = [
  { icon: Compass, title: "Organizational advisor", text: "Partners with executives and HR leaders on people and performance challenges." },
  { icon: UsersRound, title: "Leadership coach & mentor", text: "From first-line supervisors to the C-suite." },
  { icon: BookOpen, title: "Author", text: "Wrote Improving Profits Through People." },
  { icon: Mic, title: "Speaker", text: "Practical, down-to-earth keynotes and seminars." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Success Plus"
        title="Better leaders. Stronger people. Better organizational performance."
        subtitle={`${site.name} is a boutique leadership and organizational performance consulting firm, founded in ${site.founded} by Isaac Russell. We help organizations develop stronger leaders, improve workforce performance, strengthen workplace culture, and create measurable business results.`}
        crumbs={[{ name: "About" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Let&apos;s talk about your organization
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
        </div>
      </PageHero>

      {/* Philosophy */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our philosophy" title="People genuinely want to succeed." />
          </div>
          <div className="prose-sp lg:col-span-7 lg:pt-10">
            <p className="lead">
              When people understand what is expected of them, have the skills to perform, and are supported by
              effective leadership, organizations become stronger.
            </p>
            <p>
              That&apos;s why Success Plus doesn&apos;t believe in one-size-fits-all consulting. We work alongside
              leadership teams to understand the people, culture, processes, operational challenges, and business
              objectives behind the problem before recommending a solution.
            </p>
            <p>
              With particular expertise in manufacturing and operational environments, we understand leadership from the
              frontline through the executive level. And we don&apos;t simply deliver a program and leave: we become an
              extension of your leadership team, building trusted relationships that evolve as your organization does.
            </p>
            <p>
              <strong>{site.promise.join(" ")}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Isaac */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="reveal relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="rounded-[2rem] bg-white p-8">
                <Image
                  src="/images/isaac-portrait.webp"
                  alt="Isaac Russell, Founder & CEO of Success Plus Consulting"
                  width={400}
                  height={400}
                  className="mx-auto w-full max-w-[280px] rounded-full ring-8 ring-cream"
                />
                <p className="font-display mt-6 text-center text-2xl font-medium text-ink">Isaac Russell</p>
                <p className="text-center text-sm text-muted-foreground">
                  Founder &amp; CEO · Leadership &amp; Organizational Performance Advisor
                </p>
              </div>
              <div className="absolute -top-4 -right-2 rounded-2xl bg-navy px-4 py-3 text-white shadow-xl">
                <p className="font-display text-3xl leading-none font-semibold text-gold">{yearsInBusiness()}+</p>
                <p className="mt-1 text-[11px] font-semibold tracking-wider uppercase">years leading</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Meet Isaac" title="From the factory floor to the C-suite." />
            <div className="prose-sp mt-8">
              <p className="lead">
                Isaac Russell brings a perspective to leadership consulting that can only come from firsthand experience.
              </p>
              <p>
                His career began as an hourly factory worker, giving him an early understanding of the realities
                employees and frontline supervisors face every day. Rather than studying leadership only from the
                outside, Isaac experienced organizations from the ground up, eventually progressing into leadership and
                becoming a trusted advisor to organizations and leaders at every level.
              </p>
              <p>
                When performance falls short, he looks beyond the symptoms. Are expectations clear? Do people have the
                skills and support they need? Are leaders equipped to lead effectively? Are the organization&apos;s
                culture, processes, and management practices helping people succeed or getting in their way?
              </p>
              <p>
                Through Success Plus, Isaac works alongside executives, HR leaders, plant managers, frontline
                supervisors, and emerging leaders to answer those questions. His practical, relationship-driven approach
                has supported organizations including Coca-Cola, Tyson Foods, and Johnsonville in strengthening
                leadership, improving workforce performance, reducing turnover, and building stronger relationships
                between leaders and employees.
              </p>
              <p>
                As the architect of the Success Model and author of <strong>Improving Profits Through People</strong>,
                Isaac&apos;s philosophy is simple: stronger organizations are built by developing stronger leaders and
                investing in people.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {roles.map(({ icon: Icon, title, text }) => (
                <li key={title} className="reveal rounded-2xl border border-border bg-white p-6">
                  <Icon className="h-6 w-6 text-navy" aria-hidden />
                  <p className="mt-4 font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/invite-isaac-to-speak"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-light"
            >
              Invite Isaac to speak at your event
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading tone="light" eyebrow="In their words" title="Coaching rather than training." />
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              The goal isn&apos;t simply learning. It&apos;s meaningful behavioral and organizational change that lasts.
            </p>
            <Link href="/results" className="btn-ghost-light mt-8">
              See client results
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <TestimonialCard tone="dark" />
        </div>
      </section>

      <LogoMarquee />

      <CtaBand />
    </div>
  );
}
