import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Success Plus - Success Plus Consulting",
  description:
    "Success Plus is a leadership consulting firm founded in 1993 by CEO Isaac Russell providing hands-on management training and coaching.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy text-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-gold">
            Welcome to Success Plus
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl uppercase tracking-wide font-semibold">
            Discover How to Become a Great Leader
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Success Plus is a leadership consulting firm founded in 1993 by
                CEO Isaac Russell with the intent of providing hands-on
                management training and coaching to companies looking to build a
                better business.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Using a custom, personal, and hands-on approach (The Success
                Model) we have had the pleasure of helping some of
                America&apos;s most recognized brands—such as Coca-Cola, Tyson
                Foods, and Johnsonville—increase productivity, reduce turnover,
                and create stronger relationships between leaders and their
                employees.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Isaac Russell is an author, professional keynote speaker,
                mentor, and a nationally recognized leadership and executive
                business coach. He has more than 30 combined years as a leader
                and business owner. For more than 30 years, Isaac has helped
                some of America&apos;s most recognized brands increase
                productivity, reduce turnover, boost profits, and create
                stronger relationships between leadership teams and their
                employees.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-navy rounded-2xl p-8 text-white">
                <blockquote className="text-lg leading-relaxed italic text-gray-300">
                  &ldquo;The &lsquo;Success Model&rsquo; of Success Plus is very
                  unique. It is not a classroom instrumental environment. It is
                  relationship oriented through on-the-job interaction and
                  mentoring. Think of it as coaching rather than training.&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-navy-light pt-4">
                  <p className="font-semibold text-gold">John Sherman</p>
                  <p className="text-sm text-gray-400">
                    CEO – East Region, Coca-Cola Bottling Company United, Inc.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">
                  The Success Model
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Isaac challenges the status quo with his &ldquo;homespun
                  wisdom,&rdquo; proving that you don&apos;t need complex
                  theories to drive results—you need to connect with your team.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  His methods have successfully transformed first-line
                  supervisors into confident leaders, slashed turnover rates,
                  and skyrocketed productivity for major corporations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Isaac is also the celebrated author of{" "}
                  <em>Improving Profits Through People</em>, a practical guide
                  that encapsulates his philosophy: when you invest in your
                  workforce, the bottom line takes care of itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">
            Trusted by America&apos;s Most Recognized Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 text-2xl font-heading font-bold text-gray-300">
            <span>Coca-Cola</span>
            <span>Tyson Foods</span>
            <span>Johnsonville</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Work with Isaac?
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Contact us for a free needs assessment and discover how Success Plus
            can help transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8444677587"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded transition-colors"
            >
              <Phone className="h-5 w-5" />
              844-467-7587
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3 rounded transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
