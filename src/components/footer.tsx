import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-gold font-heading text-xl font-bold mb-4">
              Success Plus
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A leadership consulting firm founded in 1993 providing hands-on
              management training and coaching to companies looking to build a
              better business.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Leadership Coaching", href: "/leadership-coaching" },
                { name: "Improve Retention", href: "/improve-retention" },
                { name: "Diversity Coaching", href: "/diversity-coaching" },
                { name: "One to One Mentoring", href: "/one-to-one-mentoring" },
                { name: "Strategic Planning", href: "/strategic-planning" },
                { name: "Talent Development", href: "/talent-development" },
                { name: "Life Coach for Teens", href: "/life-coach-for-teens" },
                {
                  name: "Leadership Trainee Program",
                  href: "/leadership-trainee-program",
                },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-300 text-sm hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 text-sm hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 text-sm hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/invite-isaac-to-speak"
                  className="text-gray-300 text-sm hover:text-gold transition-colors"
                >
                  Invite Isaac to Speak
                </Link>
              </li>
              <li>
                <Link
                  href="/free-seminar"
                  className="text-gray-300 text-sm hover:text-gold transition-colors"
                >
                  Free Seminar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:8444677587"
                className="flex items-start gap-2 text-gray-300 text-sm hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                844-467-7587
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>400 South 4th Street</p>
                  <p>Suite 401M – 231</p>
                  <p>Minneapolis, MN 55415</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Mailing Address:</p>
                  <p>P.O. Box 195</p>
                  <p>Dearmanville, AL 36257</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-light/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Success Plus Consulting. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/success-plus-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/successpluscoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/successplusllc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
