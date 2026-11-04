import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { EventTypes, PageHero } from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Invite Isaac to Speak",
  "Invite Isaac Russell, founder of Success Plus Consulting, to speak at your next event, meeting, or retreat on leadership and organizational performance through people.",
  "/invite-isaac-to-speak",
);

export default function InviteIsaacToSpeakPage() {
  return (
    <div>
      <PageHero
        eyebrow="Keynotes · Seminars · Retreats"
        title="Invite Isaac to speak."
        subtitle="Book Isaac Russell for your next event, meeting, or retreat. From the factory floor to the C-suite: practical leadership lessons your team will put to work the next day."
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
                Isaac Russell is the Founder and CEO of Success Plus Consulting, a boutique leadership and organizational
                performance consulting firm.
              </p>
              <p>
                Isaac brings a perspective to leadership that can only come from firsthand experience. His career began
                as an hourly factory worker, giving him an early understanding of the realities employees and frontline
                supervisors face every day. He experienced organizations from the ground up, eventually progressing into
                leadership and becoming a trusted advisor to organizations and leaders at every level, including
                Coca-Cola, Tyson Foods, and Johnsonville.
              </p>
              <p>
                Isaac believes people genuinely want to succeed. His talks look beyond the symptoms of poor performance
                to what is really happening: Are expectations clear? Do people have the skills and support they need?
                Are leaders equipped to lead effectively?
              </p>
              <p>
                As the architect of the Success Model and author of <strong>Improving Profits Through People</strong>,
                Isaac brings the same practical, straightforward approach to the stage that he brings to every
                engagement, whether he is advising an executive team or mentoring a frontline supervisor.
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
