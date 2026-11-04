import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import { site, yearsInBusiness } from "@/lib/site";

export const metadata = pageMeta(
  "Contact",
  `Contact Success Plus Consulting today for a free needs assessment. Call ${site.phone}.`,
  "/contact",
);

export default function ContactPage() {
  const { office, mailing } = site.addresses;

  const cards = [
    {
      icon: Phone,
      title: "Call us",
      body: (
        <a href={site.phoneHref} className="font-display text-2xl font-medium text-navy hover:text-navy-light">
          {site.phone}
        </a>
      ),
    },
    {
      icon: MapPin,
      title: "Office",
      body: (
        <p>
          {office.street}, {office.suite}
          <br />
          {office.city}, {office.region} {office.postal}
        </p>
      ),
    },
    {
      icon: Mail,
      title: "Mailing address",
      body: (
        <p>
          {mailing.street}
          <br />
          {mailing.city}, {mailing.region} {mailing.postal}
        </p>
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Motivation. Sales. Leadership."
        title="Ensure long-term, measurable success."
        subtitle="Fill out the form or call to connect with us today and get a free needs assessment to determine which service will best benefit your business."
        crumbs={[{ name: "Contact" }]}
      />

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              For over {yearsInBusiness()} years, Success Plus has worked with major American
              brands like Coca-Cola, Tyson Foods, and Johnsonville to increase productivity, reduce turnover, and
              create an overall better, and more profitable, work environment. The insight, expertise, and training
              philosophy of Founder and CEO Isaac Russell helps managers, supervisors, and executives develop their
              skills and transform into truly great leaders.
            </p>

            <address className="mt-10 grid gap-4 not-italic">
              {cards.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-border">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-ink">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="text-muted-foreground">
                    <p className="mb-1 text-sm font-semibold text-ink">{title}</p>
                    {body}
                  </div>
                </div>
              ))}
            </address>

            <Link
              href="/invite-isaac-to-speak"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-light"
            >
              Looking to book Isaac for an event?
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="card-surface p-7 sm:p-10">
              <h2 className="font-display text-3xl font-medium text-ink">Send us a message</h2>
              <p className="mt-2 mb-8 text-muted-foreground">Tell us a little about your team and what you&apos;d like to improve.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
