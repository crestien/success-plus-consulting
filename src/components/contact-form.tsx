"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ variant = "full" }: { variant?: "full" | "compact" }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-semibold text-lg">Thank you!</p>
        <p className="text-green-700 mt-1">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={variant === "full" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name *
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
          />
        </div>
      </div>
      {variant === "full" && (
        <>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
              Phone
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1.5">
              Company
            </label>
            <Input id="company" name="company" placeholder="Your company" />
          </div>
        </>
      )}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          {variant === "full" ? "Message *" : "Comments"}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={variant === "full" ? 5 : 3}
          required={variant === "full"}
          placeholder={variant === "full" ? "How can we help?" : "Any comments?"}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-navy-dark font-bold py-3"
      >
        {variant === "full" ? "Send Message" : "Subscribe"}
      </Button>
    </form>
  );
}
