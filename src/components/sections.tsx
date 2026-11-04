import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Phone, Quote } from "lucide-react";
import { clients, eventTypes, site, testimonial as featured, type Service, type Testimonial } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Page hero used by inner pages                                       */
/* ------------------------------------------------------------------ */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  children,
  aside,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  crumbs?: { name: string; href?: string }[];
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-navy/70 blur-3xl"
      />
      <div aria-hidden className="absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />

      <div className={cn("container-x py-16 sm:py-24", aside && "grid items-center gap-12 lg:grid-cols-12")}>
        <div className={cn(aside && "lg:col-span-7")}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="rise mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.name} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    {c.href ? (
                      <Link href={c.href} className="hover:text-white">
                        {c.name}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white/80">
                        {c.name}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="eyebrow rise text-gold">{eyebrow}</p>}
          <h1 className="font-display rise rise-1 mt-5 text-4xl leading-[1.05] font-medium sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>}
          {children && <div className="rise rise-3 mt-9">{children}</div>}
        </div>
        {aside && <div className="rise rise-2 lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", tone === "dark" ? "text-navy-light" : "text-gold", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display mt-4 text-4xl leading-[1.08] font-medium sm:text-5xl",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-muted-foreground" : "text-white/70")}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Client logos                                                        */
/* ------------------------------------------------------------------ */
export function LogoMarquee({ label = "Trusted by America’s most recognized brands" }: { label?: string }) {
  const row = [...clients, ...clients];
  return (
    <section aria-label={label} className="border-y border-border bg-white py-10">
      <p className="container-x text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
          {row.map((c, i) => (
            <li key={`${c.name}-${i}`} aria-hidden={i >= clients.length || undefined}>
              <Image
                src={c.src}
                alt={i < clients.length ? c.name : ""}
                width={c.w}
                height={c.h}
                className="h-12 w-auto object-contain opacity-70 mix-blend-multiply grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service card                                                        */
/* ------------------------------------------------------------------ */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={service.href}
      className={cn(
        "group reveal relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_24px_48px_-24px_rgb(20_21_47/0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          {service.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonial                                                         */
/* ------------------------------------------------------------------ */
export function TestimonialCard({
  tone = "light",
  className,
  testimonial = featured,
  size = "lg",
}: {
  tone?: "light" | "dark";
  className?: string;
  testimonial?: Testimonial;
  size?: "lg" | "md";
}) {
  const dark = tone === "dark";
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 sm:p-10",
        dark ? "bg-white/5 text-white ring-1 ring-white/10" : "card-surface",
        className,
      )}
    >
      <Quote className={cn("h-10 w-10", dark ? "text-gold" : "text-gold-dark")} aria-hidden />
      <blockquote
        className={cn(
          "font-display mt-6 leading-relaxed",
          size === "lg" ? "text-xl sm:text-2xl" : "text-lg",
          dark ? "text-white" : "text-ink",
        )}
      >
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span
          aria-hidden
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold font-semibold text-ink"
        >
          {initials}
        </span>
        <span>
          <span className={cn("block font-semibold", dark ? "text-white" : "text-ink")}>{testimonial.name}</span>
          <span className={cn("block text-sm", dark ? "text-white/60" : "text-muted-foreground")}>{testimonial.title}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Event types (speaking pages)                                        */
/* ------------------------------------------------------------------ */
export function EventTypes() {
  return (
    <div className="rounded-3xl bg-muted p-7 sm:p-8">
      <h2 className="font-display text-2xl font-medium text-ink">Isaac’s presentations are perfect for</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {eventTypes.map((t) => (
          <li key={t} className="flex items-center gap-3 text-ink">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold">
              <Check className="h-3.5 w-3.5" aria-hidden />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action                                              */
/* ------------------------------------------------------------------ */
export function CtaBand({
  title = "Let’s talk about your organization.",
  text = "Tell us what’s happening with your leaders and your workforce. We’ll listen first, and the first conversation is a free needs assessment.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-white sm:px-16 sm:py-20">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -bottom-40 left-1/2 -z-10 h-80 w-[720px] -translate-x-1/2 rounded-full bg-gold/25 blur-3xl" />
        <h2 className="font-display mx-auto max-w-3xl text-4xl leading-tight font-medium sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold w-full sm:w-auto">
            Start the conversation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light w-full sm:w-auto">
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
