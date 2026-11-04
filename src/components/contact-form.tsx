"use client";

import { useState } from "react";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  subject = "General inquiry",
  eventFields = false,
  submitLabel = "Send message",
}: {
  subject?: string;
  eventFields?: boolean;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl bg-muted px-6 py-12 text-center">
        <CircleCheck className="h-12 w-12 text-navy" aria-hidden />
        <p className="font-display mt-4 text-2xl font-medium text-ink">Thank you!</p>
        <p className="mt-2 text-muted-foreground">Your message is on its way. We&apos;ll be in touch shortly.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-navy underline-offset-4 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      <input type="hidden" name="subject" value={subject} />
      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="field-label">
            Name <span className="text-navy-light">*</span>
          </label>
          <input id="cf-name" name="name" required maxLength={120} autoComplete="name" className="field" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="field-label">
            Email <span className="text-navy-light">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="field"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="field-label">
            Phone
          </label>
          <input id="cf-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className="field" placeholder="(555) 555-5555" />
        </div>
        <div>
          <label htmlFor="cf-company" className="field-label">
            Company
          </label>
          <input id="cf-company" name="company" maxLength={160} autoComplete="organization" className="field" placeholder="Your company" />
        </div>
        {eventFields && (
          <>
            <div>
              <label htmlFor="cf-date" className="field-label">
                Event date
              </label>
              <input id="cf-date" name="eventDate" type="date" className="field" />
            </div>
            <div>
              <label htmlFor="cf-location" className="field-label">
                Event location
              </label>
              <input id="cf-location" name="eventLocation" maxLength={160} className="field" placeholder="City, State" />
            </div>
          </>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className="field-label">
          Message <span className="text-navy-light">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="field resize-y"
          placeholder={eventFields ? "Tell us about your event and audience." : "How can we help?"}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {error} You can also call us at{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-navy w-full py-4 disabled:opacity-70">
        {status === "sending" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground">We&apos;ll get back to you soon. Your details stay private.</p>
    </form>
  );
}
