import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Talent Development - Success Plus Consulting",
  description:
    "At Success Plus, we help leaders develop critical skills that only come through on the job experience.",
};

export default function TalentDevelopmentPage() {
  return (
    <ServicePage
      title="Talent Development"
      subtitle="Reach Your Full Potential"
      image="/images/services/page-conflict.png"
      imageAlt="Talent development coaching"
      blogPosts={[
        { title: "Education vs Training: What's More Important?", href: "#" },
        { title: "The Root Cause To Lost Profits", href: "#" },
        { title: "Setting the Tone: How to Stay Motivated So You Can Motivate", href: "#" },
      ]}
    >
      <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "Georgia, serif" }}>
        Learn Real Leadership Skills That Can&apos;t Be Taught In The Classroom
      </h2>
      <p>
        Many new leaders coming up in the world today are highly educated
        individuals, with most boasting a master&apos;s degree or higher. And
        while a good education is to be commended, there are many aspects of
        being a leader that you simply can&apos;t learn in a classroom.
      </p>
      <p className="mt-4">
        Too often we hear about talent management, but not enough about talent
        development. And at Success Plus, we&apos;re in the business of
        developing talent.
      </p>
      <p className="mt-4">
        In these sessions, we help leaders develop critical skills that only
        come through on the job experience. We cover topics such as cost
        savings, motivation, productivity, efficiency, and the soft skills
        needed to develop and lead others.
      </p>
    </ServicePage>
  );
}
