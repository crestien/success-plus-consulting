"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { name: "Leadership Coaching", href: "/leadership-coaching" },
  { name: "Improve Retention", href: "/improve-retention" },
  { name: "Diversity Coaching", href: "/diversity-coaching" },
  { name: "One to One Mentoring", href: "/one-to-one-mentoring" },
  { name: "Strategic Planning", href: "/strategic-planning" },
  { name: "Talent Development", href: "/talent-development" },
  { name: "Life Coach for Teens", href: "/life-coach-for-teens" },
  { name: "Leadership Trainee Program", href: "/leadership-trainee-program" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-navy text-2xl sm:text-3xl tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
              <span className="font-normal">S</span>
              <span className="text-[0.75em] font-normal">UCCESS</span>
              {" "}
              <span className="font-normal text-gold">P</span>
              <span className="text-[0.75em] font-normal">LUS</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-navy-light transition-colors"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-navy-light transition-colors">
                Services
                <ChevronDown className="h-3 w-3" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full w-64 bg-white rounded-b-lg shadow-xl border border-gray-200 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about#testimonials"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-navy-light transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-navy-light transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/invite-isaac-to-speak"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-navy-light transition-colors"
            >
              Invite Isaac To Speak
            </Link>

            <a
              href="tel:8444677587"
              className="ml-4 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              844-467-7587
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-navy hover:text-navy-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <div>
              <button
                className="flex items-center gap-1 w-full px-3 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white rounded transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-navy hover:bg-navy hover:text-white rounded transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about#testimonials"
              className="block px-3 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/invite-isaac-to-speak"
              className="block px-3 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Invite Isaac To Speak
            </Link>
            <div className="pt-2">
              <a
                href="tel:8444677587"
                className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-5 py-2.5 rounded text-sm transition-colors"
              >
                <Phone className="h-4 w-4" />
                844-467-7587
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
