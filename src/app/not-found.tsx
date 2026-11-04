import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="We couldn’t find that page."
      subtitle="The page may have moved. Head back home or get in touch and we’ll point you in the right direction."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-gold">
          Back to home
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/contact" className="btn-ghost-light">
          Contact us
        </Link>
      </div>
    </PageHero>
  );
}
