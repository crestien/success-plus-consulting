import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Free Seminar - Success Plus Consulting",
  description:
    "Invite Isaac Russell to speak at your next event. Over 20 years of experience with some of the biggest brands in America.",
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

export default function FreeSeminarPage() {
  return (
    <div>
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Free Seminar
          </h1>
          <p className="text-lg text-gold uppercase tracking-wide font-semibold">
            At Your Next Event!
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Isaac Russell, CEO and Founder of Success Plus, has over 20
                years of experience working with some of the biggest, most
                recognized brands in America. His knowledge, expert analysis,
                and training philosophy have helped companies like Coca-Cola,
                Tyson Foods, and Johnsonville increase productivity, reduce
                turnover, and create an overall better, and more profitable,
                work environment.
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
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
