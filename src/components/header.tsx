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
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-sm">
          <a
            href="tel:8444677587"
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">844-467-7587</span>
            <span className="hidden sm:inline">Call Today!</span>
          </a>
          <div className="flex items-center gap-4">
            <Link
              href="/invite-isaac-to-speak"
              className="hidden sm:inline-block text-gold hover:text-gold-light transition-colors"
            >
              Invite Isaac to Speak
            </Link>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gold font-heading">
                Success Plus
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300 -mt-1">
                Consulting
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium hover:text-gold transition-colors"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-gold transition-colors">
                Services
                <ChevronDown className="h-3 w-3" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full w-64 bg-navy-dark rounded-b-lg shadow-xl border border-navy-light/20 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm hover:bg-navy-light hover:text-gold transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium hover:text-gold transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="ml-4 bg-gold hover:bg-gold-dark text-navy-dark px-5 py-2 rounded text-sm font-bold transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-navy-light/20">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 text-sm font-medium hover:bg-navy-light hover:text-gold rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2.5 text-sm font-medium hover:bg-navy-light hover:text-gold rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <div>
              <button
                className="flex items-center gap-1 w-full px-3 py-2.5 text-sm font-medium hover:bg-navy-light hover:text-gold rounded transition-colors"
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
                      className="block px-3 py-2 text-sm hover:bg-navy-light hover:text-gold rounded transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/invite-isaac-to-speak"
              className="block px-3 py-2.5 text-sm font-medium hover:bg-navy-light hover:text-gold rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Invite Isaac to Speak
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 text-sm font-medium hover:bg-navy-light hover:text-gold rounded transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-gold hover:bg-gold-dark text-navy-dark px-5 py-2.5 rounded text-sm font-bold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
