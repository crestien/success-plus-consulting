import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "One To One Mentoring - Success Plus Consulting",
  description:
    "At Success Plus, we offer one-to-one mentoring sessions for every level of leadership with a personal, hands-on approach.",
};

const blogPosts = [
  { title: "Setting the Tone: How to Stay Motivated So You Can Motivate", href: "#" },
  { title: "3 Things to Consider Before Hiring a Diversity Coach", href: "#" },
  { title: "The Root Cause To Lost Profits", href: "#" },
  { title: "4 Ways to Deal with Change", href: "#" },
  { title: "Education vs Training: What's More Important?", href: "#" },
  {
    title: "Case Study: How Success Plus Helped Tyson Foods Decrease Turnover By 30%",
    href: "#",
  },
];

export default function OneToOneMentoringPage() {
  return (
    <ServicePage
      title="One to One Mentoring"
      subtitle="Find Out How Success Plus Helps Leaders"
      image="/images/services/page-coaching.png"
      imageAlt="One to one mentoring"
      blogPosts={blogPosts}
    >
      <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "Georgia, serif" }}>
        What challenges are you facing today?
      </h2>
      <p>
        Even the best of the best leaders rely on coaches and mentors for
        valuable insight, constructive criticism, and actionable feedback to
        help them grow and develop into better leaders.
      </p>
      <p className="mt-4">
        At Success Plus, we offer one-to-one mentoring sessions for every level
        of leadership. We take a personal, hands-on approach and provide an
        objective perspective to help leaders navigate real life situations and
        the day to day problems they may bring.
      </p>
      <p className="mt-4">
        Contact Success Plus today for information about One to One Mentoring.
      </p>
    </ServicePage>
  );
}
