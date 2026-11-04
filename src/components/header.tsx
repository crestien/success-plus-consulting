"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/about#testimonials" },
  { name: "Speaking", href: "/invite-isaac-to-speak" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open; Escape closes any menu.
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // Click outside closes the services dropdown.
  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [servicesOpen]);

  const isActive = (href: string) => pathname === href.split("#")[0] && !href.includes("#");
  const servicesActive = services.some((s) => s.href === pathname);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-border/80 bg-white/85 shadow-[0_1px_24px_-12px_rgb(20_21_47/0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-white",
      )}
    >
      <nav aria-label="Main" className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image src="/images/logo.png" alt={site.shortName} width={601} height={80} className="h-7 w-auto sm:h-8" priority />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                servicesActive ? "text-navy" : "text-foreground/80 hover:text-navy",
              )}
            >
              Services
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", servicesOpen && "rotate-180")} aria-hidden />
            </button>

            <div
              id="services-menu"
              className={cn(
                "absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-3 transition-all duration-200",
                servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
              )}
            >
              <div className="card-surface grid grid-cols-2 gap-1 p-3">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-muted"
                  >
                    <Image
                      src={s.image}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-xl object-cover"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-ink group-hover:text-navy">{s.name}</span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted-foreground">{s.summary}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                isActive(item.href) ? "text-navy" : "text-foreground/80 hover:text-navy",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-navy-light">
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <Link href="/contact" className="btn-navy px-5 py-2.5">
            Free assessment
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-full p-2.5 text-navy transition-colors hover:bg-muted lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-white lg:hidden"
      >
        <div className="container-x space-y-8 py-6">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Services</p>
            <ul className="grid gap-1 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-3 rounded-2xl p-2 text-base font-medium text-ink hover:bg-muted"
                  >
                    <Image src={s.image} alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-cover" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="space-y-1 border-t border-border pt-6">
            {[{ name: "Home", href: "/" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display block rounded-xl px-2 py-2 text-2xl text-ink hover:bg-muted"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/contact" className="btn-navy">
              Get a free needs assessment
            </Link>
            <a href={site.phoneHref} className="btn-ghost-dark">
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
