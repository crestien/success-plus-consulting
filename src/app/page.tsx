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
  Phone,
  BookOpen,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const services = [
  {
    title: "Leadership Coaching",
    description: "Become a great leader!",
    icon: Users,
    href: "/leadership-coaching",
  },
  {
    title: "Improve Retention",
    description: "Develop a plan to improve retention!",
    icon: TrendingUp,
    href: "/improve-retention",
  },
  {
    title: "Diversity Coaching",
    description: "Learn more about diversity coaching",
    icon: Globe,
    href: "/diversity-coaching",
  },
  {
    title: "One to One Mentoring",
    description: "Get insight & personal guidance",
    icon: UserCheck,
    href: "/one-to-one-mentoring",
  },
  {
    title: "Strategic Planning",
    description: "Create your strategy today!",
    icon: Target,
    href: "/strategic-planning",
  },
  {
    title: "Talent Development",
    description: "Reach your full potential",
    icon: Sparkles,
    href: "/talent-development",
  },
  {
    title: "Life Coach for Teens",
    description: "Let us help your teens",
    icon: Heart,
    href: "/life-coach-for-teens",
  },
  {
    title: "Leadership Trainee Program",
    description: "Learn more about this program",
    icon: GraduationCap,
    href: "/leadership-trainee-program",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-navy-light)_0%,_transparent_60%)] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-4">
                Results-Oriented Leadership Strategies
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Coach to Managers
                <br />
                and{" "}
                <span className="text-gold">Supervisors</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Advisor to CEOs &amp; Leaders
              </p>
              <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
                His knowledge, expert analysis, and training philosophy can help
                you increase productivity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3.5 rounded text-base transition-colors"
                >
                  Work With Isaac
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/invite-isaac-to-speak"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark font-bold px-8 py-3.5 rounded text-base transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  Book Isaac for Your Next Event
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-gold mb-2">
                  Subscribe to Monthly Tips
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get leadership insights delivered to your inbox.
                </p>
                <ContactForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Banner */}
      <section className="bg-gold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-navy-dark font-bold text-lg sm:text-xl">
            You&apos;re Invited To An{" "}
            <span className="uppercase">In-Person Networking Event</span> with
            Guest Speaker Isaac Russell
          </p>
          <Link
            href="/contact"
            className="inline-block mt-3 bg-navy hover:bg-navy-light text-white font-bold px-6 py-2.5 rounded text-sm transition-colors"
          >
            Register to Attend
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Services
            </h2>
            <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
              To improve the communication &amp; relationships with your
              employees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                    <Icon className="h-6 w-6 text-navy group-hover:text-gold-dark transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy text-base mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
                About Isaac Russell
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
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
                className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:text-gold transition-colors"
              >
                Learn more about Success Plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Contact us today and get a free needs assessment to determine which
            service will best benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8444677587"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3.5 rounded text-base transition-colors"
            >
              <Phone className="h-5 w-5" />
              844-467-7587
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3.5 rounded text-base transition-colors"
            >
              Send Us a Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Subscribe (hidden on lg) */}
      <section className="lg:hidden py-16 bg-gray-50">
        <div className="mx-auto max-w-md px-4">
          <h3 className="font-heading text-2xl font-bold text-navy mb-2 text-center">
            Subscribe to Monthly Tips
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Get leadership insights delivered to your inbox.
          </p>
          <ContactForm variant="compact" />
        </div>
      </section>
    </div>
  );
}
