import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronRight, Phone } from "lucide-react";
import { clients, eventTypes, proofPoint, site, testimonial as featured, type Service, type Testimonial } from "@/lib/site";
import { cn } from "@/lib/utils";
import { breadcrumbLd, ldJson } from "@/lib/seo";

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
    <section className="bg-navy-dark text-white">
      <div className={cn("container-x py-16 sm:py-28", aside && "grid items-center gap-12 lg:grid-cols-12")}>
        <div className={cn(aside && "lg:col-span-7")}>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="rise mb-8">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(breadcrumbLd(crumbs)) }} />
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
                <li>
                  <Link href="/" className="link-sweep hover:text-white">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.name} className="flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                    {c.href ? (
                      <Link href={c.href} className="link-sweep hover:text-white">
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
          {eyebrow && <p className="rise text-sm font-semibold text-gold">{eyebrow}</p>}
          <h1 className="font-display rise rise-1 mt-5 max-w-4xl text-[2.6rem] leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && <p className="rise rise-2 mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{subtitle}</p>}
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
        <p className={cn("eyebrow", tone === "dark" ? "text-navy" : "text-gold", align === "center" && "justify-center")}>
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
export function LogoMarquee({ label = "Trusted by leaders at" }: { label?: string }) {
  return <ClientLogos label={label} />;
}

/* ------------------------------------------------------------------ */
/* Service card                                                        */
/* ------------------------------------------------------------------ */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link href={service.href} className={cn("group block border-t border-ink pt-5 pb-2", className)}>
      <h3 className="font-display flex items-center justify-between gap-4 text-2xl font-medium text-ink group-hover:text-navy">
        {service.name}
        <ArrowRight className="h-5 w-5 shrink-0 text-navy transition-transform group-hover:translate-x-1" aria-hidden />
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{service.summary}</p>
    </Link>
  );
}

/** Editorial list of services (replaces image-card grids). */
export function ServiceList({ items, className }: { items: Service[]; className?: string }) {
  return (
    <div className={cn("grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((s) => (
        <ServiceCard key={s.href} service={s} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Featured success story                                              */
/* ------------------------------------------------------------------ */
export function FeaturedResult() {
  return (
    <section className="bg-navy text-white">
      <div className="container-x grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <p className="font-display text-[6rem] leading-none font-medium text-gold sm:text-[8rem] lg:col-span-4">
          {proofPoint.value}
        </p>
        <div className="lg:col-span-8">
          <h2 className="font-display text-3xl leading-tight font-medium sm:text-4xl">{proofPoint.label}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{proofPoint.text}</p>
          <Link
            href={proofPoint.href}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-gold underline underline-offset-4 hover:text-gold-light"
          >
            Read the Tyson Foods story
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
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
  return (
    <figure className={cn("border-l-4 border-gold pl-6 sm:pl-8", className)}>
      <blockquote
        className={cn(
          "font-display leading-snug",
          size === "lg" ? "text-2xl sm:text-[1.9rem]" : "text-xl",
          dark ? "text-white" : "text-ink",
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className={cn("mt-5", dark ? "text-white/80" : "text-muted-foreground")}>
        <strong className={cn("font-semibold", dark ? "text-white" : "text-ink")}>{testimonial.name}</strong>,{" "}
        {testimonial.title}
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
    <section className="bg-navy text-white">
      <div className="container-x flex flex-col justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight font-medium sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-white/85">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
          <Link href="/contact" className="btn-gold self-start">
            Start the conversation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href={site.phoneHref} className="inline-flex items-center gap-2 text-white/85 hover:text-white">
            <Phone className="h-4 w-4" aria-hidden />
            or call <span className="border-b border-white/50 font-semibold text-white">{site.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Photography slot: swap for <Image> when real photos are supplied    */
/* ------------------------------------------------------------------ */
export function PhotoSlot({
  note,
  src,
  className,
  tone = "light",
}: {
  note: string;
  src?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-md", className)}>
        <Image src={src} alt={note} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Photography to come: ${note}`}
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-md p-8 text-center",
        tone === "dark"
          ? "bg-gradient-to-br from-navy to-ink text-white/80"
          : "bg-gradient-to-br from-lavender to-[#d9d6ee] text-navy",
        className,
      )}
    >
      <div className="max-w-[18rem]">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase opacity-80">Photography to come</p>
        <p className="font-display mt-2 text-lg leading-snug">{note}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Static client logo row                                              */
/* ------------------------------------------------------------------ */
export function ClientLogos({ label = "Trusted by leaders at" }: { label?: string }) {
  return (
    <section aria-label={label} className="border-b border-border bg-white py-8">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <p className="text-sm text-muted-foreground">{label}</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-5 lg:gap-x-14">
          {clients.map((c) => (
            <li key={c.name}>
              <Image
                src={c.src}
                alt={c.name}
                width={c.w}
                height={c.h}
                className="h-9 w-auto max-w-[8.5rem] object-contain opacity-80 mix-blend-multiply grayscale sm:h-11"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
