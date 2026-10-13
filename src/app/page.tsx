import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

const services = [
  {
    title: "Leadership\nCoaching",
    cta: "Become a Great Leader!",
    href: "/leadership-coaching",
    image: "/images/services/leadership.jpg",
  },
  {
    title: "Improve\nRetention",
    cta: "Develop a Plan to Improve Retention!",
    href: "/improve-retention",
    image: "/images/services/retention.jpg",
  },
  {
    title: "Diversity\nCoaching",
    cta: "Learn More About Diversity Coaching",
    href: "/diversity-coaching",
    image: "/images/services/diversity.jpg",
  },
  {
    title: "One to One\nMentoring",
    cta: "Get Insight & Personal Guidance",
    href: "/one-to-one-mentoring",
    image: "/images/services/mentoring.png",
  },
  {
    title: "Strategic\nPlanning",
    cta: "Create Your Strategy Today!",
    href: "/strategic-planning",
    image: "/images/services/planning.png",
  },
  {
    title: "Talent\nDevelopment",
    cta: "Reach Your Full Potential",
    href: "/talent-development",
    image: "/images/services/talent.jpg",
  },
  {
    title: "Life Coach\nfor Teens",
    cta: "Let Us Help Your Teens",
    href: "/life-coach-for-teens",
    image: "/images/services/teens.jpg",
  },
  {
    title: "Leadership\nTrainee Program",
    cta: "Learn More About This Program",
    href: "/leadership-trainee-program",
    image: "/images/services/trainee.jpg",
  },
];

const clients = [
  { name: "Coca-Cola", src: "/images/clients/coca-cola.png" },
  { name: "Bonnie Plants", src: "/images/clients/bonnie-plants.png" },
  { name: "Johnsonville", src: "/images/clients/johnsonville.png" },
  { name: "Tyson", src: "/images/clients/tyson.png" },
  { name: "American Seafoods", src: "/images/clients/american-seafoods.png" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Image
              src="/images/book-header.jpg"
              alt="Get your copy of Improving Profits Through People by Isaac Russell"
              width={1536}
              height={430}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 sm:mt-14">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-red-cta hover:bg-red-cta-dark text-white font-bold px-10 py-4 rounded text-sm sm:text-base uppercase tracking-wider transition-colors w-full sm:w-auto"
            >
              Get Your Copy of Isaac&apos;s Book
            </Link>
            <Link
              href="/invite-isaac-to-speak"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-10 py-4 rounded text-sm sm:text-base uppercase tracking-wider transition-colors w-full sm:w-auto"
            >
              Invite Isaac to Speak
            </Link>
          </div>
        </div>
      </section>

      {/* Yellow Banner */}
      <section className="bg-gold py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-navy text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Results-Oriented
            <br />
            Leadership Strategies
          </h2>
          <p className="text-navy-dark text-lg sm:text-xl mt-4 font-medium">
            Coach to Managers and Supervisors
          </p>
          <p className="text-navy-dark text-lg sm:text-xl font-medium">
            Advisor to CEOs &amp; Leaders
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-lavender py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {clients.map((brand) => (
              <Image
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                width={180}
                height={72}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
            <h2
              className="text-3xl sm:text-4xl font-bold text-navy uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Work With Isaac
            </h2>
            <Link
              href="/invite-isaac-to-speak"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-6 py-3 rounded text-sm uppercase tracking-wider transition-colors"
            >
              Book Isaac for Your Next Event
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 text-base mb-10">
            <span className="underline">Services</span> to improve the
            communication &amp; relationships with your employees.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-40 bg-navy">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="bg-navy p-4 text-center">
                  <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wide whitespace-pre-line leading-tight min-h-[2.5rem]">
                    {service.title}
                  </h3>
                  <div className="mt-3">
                    <span className="inline-block bg-gold hover:bg-gold-dark text-navy-dark text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors">
                      {service.cta}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-dark font-semibold uppercase tracking-widest text-sm mb-3">
                About Isaac Russell
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-navy mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                From the Factory Floor to the C-Suite
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Isaac Russell is a dynamic force in the world of leadership
                development and the Founder &amp; CEO of Success Plus
                Consulting. His inspiring journey began as an hourly factory
                worker, eventually rising through the ranks to become a trusted
                advisor for some of America&apos;s most recognized brands.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With over 20 years of hands-on experience, Isaac is the
                architect of the &ldquo;Success Model,&rdquo; a unique,
                relationship-oriented approach to management that prioritizes
                people over process.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
              >
                Learn more about Success Plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <Image
                src="/images/isaac-russell.jpg"
                alt="Isaac Russell, Founder and CEO of Success Plus Consulting"
                width={310}
                height={310}
                className="mx-auto mb-6 h-auto w-64 sm:w-72"
              />
              <div className="bg-navy rounded-lg p-8 text-white">
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
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe / CTA */}
      <section className="bg-navy py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Contact us today and get a free needs assessment to determine which
            service will best benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8444677587"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3.5 rounded uppercase tracking-wider transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              844-467-7587
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3.5 rounded uppercase tracking-wider transition-colors"
            >
              Send Us a Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
