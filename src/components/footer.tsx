import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { services, site, solutionAreas } from "@/lib/site";

const icons = {
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  facebook:
    "M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z",
  x: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41z",
};

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, path: icons.linkedin },
  { label: "Facebook", href: site.social.facebook, path: icons.facebook },
  { label: "X (Twitter)", href: site.social.x, path: icons.x },
];

const company = [
  { name: "How We Work", href: "/how-we-work" },
  { name: "Results", href: "/results" },
  { name: "About Success Plus", href: "/about" },
  { name: "Invite Isaac to Speak", href: "/invite-isaac-to-speak" },
  { name: "Free Seminar", href: "/free-seminar" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const { mailing } = site.addresses;

  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/images/logo-white.png" alt={site.shortName} width={600} height={113} className="h-10 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {site.tagline}. Serving organizations nationwide since {site.founded}.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-gold hover:text-gold-light"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {site.phone}
            </a>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="text-sm font-semibold text-white">Solutions</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {solutionAreas.map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className="link-sweep font-medium text-white/90 hover:text-gold">
                      {a.name}
                    </Link>
                  </li>
                ))}
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="link-sweep hover:text-gold">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Company</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="link-sweep hover:text-gold">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Write to us</h2>
              <address className="mt-4 space-y-5 text-sm leading-relaxed not-italic">
                <p>
                  <span className="block text-white/90">{site.name}</span>
                  {mailing.street}
                  <br />
                  {mailing.city}, {mailing.region} {mailing.postal}
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display text-sm text-white/70 italic">{site.brandLine}</p>
        </div>
      </div>
    </footer>
  );
}
