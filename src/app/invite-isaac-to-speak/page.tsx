import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Invite Isaac to Speak - Success Plus Consulting",
  description:
    "Invite Isaac Russell to speak at your next event, meeting, or retreat. A dynamic force in leadership development.",
};

const eventTypes = [
  "Company Events",
  "Retreats",
  "Non-Profit Events",
  "Conferences",
  "Seminars",
  "Quarterly Meetings",
  "Chamber Events",
  "SHRM Events",
];

export default function InviteIsaacToSpeakPage() {
  return (
    <div>
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Invite Isaac to Speak
          </h1>
          <p className="text-lg text-gold">
            Book Isaac Russell for your next event, meeting, or retreat.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-2xl font-bold text-navy mb-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                From the Factory Floor to the C-Suite
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mt-6">
                <p>
                  Isaac Russell is a dynamic force in the world of leadership
                  development and the Founder &amp; CEO of Success Plus
                  Consulting. A true testament to the power of grit and growth,
                  Isaac didn&apos;t just study leadership in a classroom—he
                  lived it. His inspiring journey began as an hourly factory
                  worker, where he learned the ropes from the ground up,
                  eventually rising through the ranks to become a trusted
                  advisor for some of America&apos;s most recognized brands,
                  including Coca-Cola, Tyson Foods, and Johnsonville.
                </p>
                <p>
                  With over 20 years of hands-on experience, Isaac is the
                  architect of the &ldquo;Success Model,&rdquo; a unique,
                  relationship-oriented approach to management that prioritizes
                  people over process. He challenges the status quo with his
                  &ldquo;homespun wisdom,&rdquo; proving that you don&apos;t
                  need complex theories to drive results—you need to connect
                  with your team. His methods have successfully transformed
                  first-line supervisors into confident leaders, slashed
                  turnover rates, and skyrocketed productivity for major
                  corporations.
                </p>
                <p>
                  Isaac is also the celebrated author of{" "}
                  <em>Improving Profits Through People</em>, a practical guide
                  that encapsulates his philosophy: when you invest in your
                  workforce, the bottom line takes care of itself. Whether he is
                  coaching a CEO or mentoring a new manager, Isaac brings an
                  infectious energy and a &ldquo;down-to-earth&rdquo; style that
                  empowers individuals to assume nothing, teach everything, and
                  lead with purpose.
                </p>
              </div>

              <div className="mt-10 bg-gray-50 rounded-lg p-6">
                <h3
                  className="text-lg font-bold text-navy mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Isaac&apos;s Presentations Are Perfect For:
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {eventTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full shrink-0" />
                      <span className="text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
                <h3
                  className="text-xl font-bold text-navy mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Send a Request
                </h3>
                <p className="text-gray-600 mb-6">
                  If you&apos;d like to invite Isaac to speak at your next
                  event, meeting, or retreat, just fill out the form and
                  we&apos;ll contact you about availability.
                </p>
                <ContactForm variant="full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
