import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { EventTypes, PageHero } from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Invite Isaac to Speak",
  "Invite Isaac Russell to speak at your next event, meeting, or retreat. A dynamic force in leadership development.",
  "/invite-isaac-to-speak",
);

export default function InviteIsaacToSpeakPage() {
  return (
    <div>
      <PageHero
        eyebrow="Keynotes · Seminars · Retreats"
        title="Invite Isaac to speak."
        subtitle="Book Isaac Russell for your next event, meeting, or retreat. Infectious energy, down-to-earth wisdom, and leadership lessons your team will put to work the next day."
        crumbs={[{ name: "Invite Isaac to Speak" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-5">
              <Image
                src="/images/isaac-portrait.webp"
                alt="Isaac Russell, leadership speaker and founder of Success Plus Consulting"
                width={400}
                height={400}
                className="h-24 w-24 rounded-full ring-4 ring-gold"
              />
              <div>
                <p className="eyebrow text-navy-light">About the speaker</p>
                <h2 className="font-display mt-2 text-3xl font-medium text-ink">From the factory floor to the C-suite</h2>
              </div>
            </div>

            <div className="prose-sp mt-8">
              <p className="lead">
                Isaac Russell is a dynamic force in the world of leadership development and the Founder &amp; CEO of
                Success Plus Consulting.
              </p>
              <p>
                A true testament to the power of grit and growth, Isaac didn&apos;t just study leadership in a
                classroom; he lived it. His inspiring journey began as an hourly factory worker, where he learned the
                ropes from the ground up, eventually rising through the ranks to become a trusted advisor for some of
                America&apos;s most recognized brands, including Coca-Cola, Tyson Foods, and Johnsonville.
              </p>
              <p>
                Isaac is the architect of the &ldquo;Success Model,&rdquo; a unique, relationship-oriented approach to
                management that prioritizes people over process. He challenges the status quo with his &ldquo;homespun
                wisdom,&rdquo; proving that you don&apos;t need complex theories to drive results; you need to connect
                with your team. His methods have transformed first-line supervisors into confident leaders, slashed
                turnover rates, and skyrocketed productivity for major corporations.
              </p>
              <p>
                Isaac is also the celebrated author of <strong>Improving Profits Through People</strong>, a practical
                guide that encapsulates his philosophy: when you invest in your workforce, the bottom line takes care of
                itself. Whether he is coaching a CEO or mentoring a new manager, Isaac brings an infectious energy and a
                &ldquo;down-to-earth&rdquo; style that empowers individuals to assume nothing, teach everything, and
                lead with purpose.
              </p>
            </div>

            <div className="mt-12">
              <EventTypes />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="card-surface p-7 sm:p-10 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl font-medium text-ink">Send a request</h2>
              <p className="mt-2 mb-8 text-muted-foreground">
                Fill out the form and we&apos;ll contact you about Isaac&apos;s availability.
              </p>
              <ContactForm subject="Speaking request" eventFields submitLabel="Request Isaac" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
