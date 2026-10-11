import Link from "next/link";
import {
  Users,
  TrendingUp,
  Globe,
  UserCheck,
  Target,
  Sparkles,
  Heart,
  GraduationCap,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "Leadership\nCoaching",
    cta: "Become a Great Leader!",
    icon: Users,
    href: "/leadership-coaching",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Improve\nRetention",
    cta: "Develop a Plan to Improve Retention!",
    icon: TrendingUp,
    href: "/improve-retention",
    gradient: "from-indigo-600 to-indigo-800",
  },
  {
    title: "Diversity\nCoaching",
    cta: "Learn More About Diversity Coaching",
    icon: Globe,
    href: "/diversity-coaching",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    title: "One to One\nMentoring",
    cta: "Get Insight & Personal Guidance",
    icon: UserCheck,
    href: "/one-to-one-mentoring",
    gradient: "from-cyan-600 to-cyan-800",
  },
  {
    title: "Strategic\nPlanning",
    cta: "Create Your Strategy Today!",
    icon: Target,
    href: "/strategic-planning",
    gradient: "from-teal-600 to-teal-800",
  },
  {
    title: "Talent\nDevelopment",
    cta: "Reach Your Full Potential",
    icon: Sparkles,
    href: "/talent-development",
    gradient: "from-emerald-600 to-emerald-800",
  },
  {
    title: "Life Coach\nfor Teens",
    cta: "Let Us Help Your Teens",
    icon: Heart,
    href: "/life-coach-for-teens",
    gradient: "from-rose-600 to-rose-800",
  },
  {
    title: "Leadership\nTrainee Program",
    cta: "Learn More About This Program",
    icon: GraduationCap,
    href: "/leadership-trainee-program",
    gradient: "from-amber-600 to-amber-800",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Book */}
            <div className="relative">
              <div className="w-56 sm:w-64 bg-navy rounded-lg shadow-2xl p-6 text-white text-center">
                <p className="text-[10px] uppercase tracking-wider text-gray-300 mb-2">
                  Leadership in a Changing World
                </p>
                <h2
                  className="text-2xl font-bold leading-tight mb-3"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Improving
                  <br />
                  <span className="text-gold text-lg">Profits</span>
                  <br />
                  <span className="italic text-sm font-normal text-gray-300">
                    through
                  </span>
                  <br />
                  People
                </h2>
                <div className="border-t border-navy-light pt-3 mt-3">
                  <p className="text-xs text-gray-300">
                    Boosting Your Organization&apos;s Bottom Line
                    <br />
                    With a Results-Oriented Leadership Process
                  </p>
                </div>
                <p className="mt-4 text-sm font-bold">Isaac Russell</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                  Nationally Recognized Executive Leadership Coach
                </p>
              </div>
            </div>

            {/* Get Your Copy */}
            <div className="text-center lg:text-left">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Get Your
                <br />
                Copy!
              </h1>
            </div>

            {/* Author Circle */}
            <div className="relative">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-[6px] border-gold bg-navy flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-navy-light rounded-full flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 text-gold" />
                  </div>
                  <p
                    className="text-xs sm:text-sm font-bold italic"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Isaac Russell
                  </p>
                </div>
              </div>
              <p className="text-center mt-3 text-xs sm:text-sm font-bold text-navy uppercase tracking-wider">
                Learn More About the Author
              </p>
            </div>
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
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
            {["Coca-Cola", "Bonnie Plants", "Johnsonville", "Tyson", "American Seafoods"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-xl sm:text-2xl font-bold text-navy/60"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {brand}
                </span>
              )
            )}
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
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  {/* Photo area */}
                  <div
                    className={`h-40 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                  >
                    <Icon className="h-16 w-16 text-white/40 group-hover:text-white/60 transition-colors" />
                  </div>
                  {/* Navy text area */}
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
              );
            })}
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
