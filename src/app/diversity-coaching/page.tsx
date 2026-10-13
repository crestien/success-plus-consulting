import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Diversity Coaching - Success Plus Consulting",
  description:
    "Our diversity coaching sessions teach leaders how to manage, respect, and motivate a diverse workforce.",
};

export default function DiversityCoachingPage() {
  return (
    <ServicePage
      title="Diversity Coaching"
      subtitle="Learn More About Diversity Coaching"
      image="/images/services/page-diversity.jpg"
      imageAlt="Diversity coaching"
      blogPosts={[
        { title: "3 Things to Consider Before Hiring a Diversity Coach", href: "#" },
        { title: "The Root Cause To Lost Profits", href: "#" },
        { title: "4 Ways to Deal with Change", href: "#" },
      ]}
    >
      <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "Georgia, serif" }}>
        How well do you know your employees?
      </h2>
      <p>
        The Millennial generation is the most diverse generation to ever come
        through our country. They make up the largest share of the workforce.
        This makes diversity in the workplace more important than ever.
      </p>
      <p className="mt-4">
        Understanding and respecting workers&apos; heritage, race, religion,
        sexual orientation, and gender is becoming a crucial aspect of success.
        Insensitivity and ignorance are barriers to a productive workplace,
        even when they&apos;re not deliberate.
      </p>
      <p className="mt-4">
        Our diversity coaching sessions teach leaders how to manage, respect,
        and motivate a diverse workforce for a stronger, productive, and more
        profitable business.
      </p>
    </ServicePage>
  );
}
