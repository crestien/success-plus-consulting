import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Strategic Planning - Success Plus Consulting",
  description:
    "Using a unique method of strategic planning, Success Plus helps business leaders create, define, and execute their short and long term goals.",
};

export default function StrategicPlanningPage() {
  return (
    <ServicePage
      title="Strategic Planning"
      subtitle="Create Your Strategy Today!"
      blogPosts={[
        { title: "The Root Cause To Lost Profits", href: "#" },
        { title: "4 Ways to Deal with Change", href: "#" },
      ]}
    >
      <h2 className="font-heading text-2xl font-bold text-navy mb-4">
        Do you know where your business is headed?
      </h2>
      <p>
        Too many businesses make the mistake of trying to execute 100 ideas
        without a focused strategy. That&apos;s a quick path to failure.
        Without direction, there is no success.
      </p>
      <p className="mt-4">
        Using a unique method of strategic planning, Success Plus helps
        business leaders create, define, and execute their short and long term
        goals. Start building your plan today.
      </p>
    </ServicePage>
  );
}
