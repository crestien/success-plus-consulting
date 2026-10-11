import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Leadership Coaching - Success Plus Consulting",
  description:
    "In our Leadership Coaching sessions, we help leaders build a successful plan and put the business on the path to success.",
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

export default function LeadershipCoachingPage() {
  return (
    <ServicePage
      title="Leadership Coaching"
      subtitle="Discover How to Become a Great Leader"
      blogPosts={blogPosts}
    >
      <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "Georgia, serif" }}>
        Build a Plan.
      </h2>
      <p>
        The number one reason leaders fail is because they enter the leadership
        role without a plan that answers some of the most important questions
        that need to be addressed. How will you enforce company policies? How
        will you set goals? How will you ensure those goals are met? How will
        you keep your workforce motivated and productive?
      </p>
      <p className="mt-4">
        In our Leadership Coaching sessions, we help leaders build a successful
        plan to address these questions and put the business on the path to
        success.
      </p>
      <p className="mt-4 text-xl font-semibold text-navy">
        Are you ready to step to the challenge?
      </p>
    </ServicePage>
  );
}
