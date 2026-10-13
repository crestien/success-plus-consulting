import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to Success Plus
          </h1>
          <p className="text-base sm:text-lg text-gold max-w-2xl uppercase tracking-wide font-semibold">
            Discover How to Become a Great Leader
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Image
                src="/images/isaac-russell.jpg"
                alt="Isaac Russell, Founder and CEO of Success Plus Consulting"
                width={310}
                height={310}
                className="mb-8 h-auto w-56 sm:w-64"
              />
              <h2
                className="text-3xl font-bold text-navy mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
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
              <div id="testimonials" className="bg-navy rounded-lg p-8 text-white">
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

              <div className="bg-gray-50 rounded-lg p-8">
                <h3
                  className="text-xl font-bold text-navy mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
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
      <section className="py-14 bg-lavender">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-navy/60 font-semibold mb-8">
            Trusted by America&apos;s Most Recognized Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { name: "Coca-Cola", src: "/images/clients/coca-cola.png" },
              { name: "Tyson Foods", src: "/images/clients/tyson.png" },
              { name: "Johnsonville", src: "/images/clients/johnsonville.png" },
              { name: "Bonnie Plants", src: "/images/clients/bonnie-plants.png" },
              { name: "American Seafoods", src: "/images/clients/american-seafoods.png" },
            ].map((brand) => (
              <Image
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                width={160}
                height={64}
                className="h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to Work with Isaac?
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Contact us for a free needs assessment and discover how Success Plus
            can help transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8444677587"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded uppercase tracking-wider transition-colors"
            >
              <Phone className="h-5 w-5" />
              844-467-7587
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3 rounded uppercase tracking-wider transition-colors"
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
