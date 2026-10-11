import type { Metadata } from "next";
import { Phone, MapPin, Mail, BookOpen } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Success Plus Consulting",
  description:
    "Contact Success Plus Consulting today for a free needs assessment. Call 844-467-7587.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy text-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-4">
            Ensure Long-Term, Measurable Success!
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Connect With Us Today!
          </p>
          <p className="text-gold font-semibold mt-2 uppercase tracking-wider">
            Motivation. Sales. Leadership.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-10">
                <Link
                  href="/invite-isaac-to-speak"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-6 py-3 rounded transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                  Book Isaac for Your Next Event
                </Link>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                For over 20 years, Success Plus has worked with major American
                brands like Coca-Cola, Tyson Foods, and Johnsonville to increase
                productivity, reduce turnover, and create an overall better, and
                more profitable, work environment. The insight, expertise, and
                training philosophy of Founder and CEO Isaac Russell helps
                managers, supervisors, and executives develop their skills and
                transform into truly great leaders.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Fill out the form or call to connect with us today and get a
                free needs assessment to determine which service will best
                benefit your business.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy uppercase text-sm tracking-wider mb-2">
                    Address
                  </h3>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p>400 South 4th Street, Suite 401M – 231</p>
                      <p>Minneapolis, MN 55415</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-navy uppercase text-sm tracking-wider mb-2">
                    Mailing Address
                  </h3>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Mail className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p>P.O. Box 195</p>
                      <p>Dearmanville, AL 36257</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-navy uppercase text-sm tracking-wider mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:8444677587"
                    className="flex items-center gap-3 text-gold-dark hover:text-gold transition-colors text-lg font-bold"
                  >
                    <Phone className="h-5 w-5 shrink-0" />
                    844-467-7587
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Send Us a Message
                </h2>
                <ContactForm variant="full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
