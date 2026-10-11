import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Improve Retention - Success Plus Consulting",
  description:
    "Success Plus possesses the expertise to help you develop a thorough plan to prevent turnover and retain your workforce.",
};

export default function ImproveRetentionPage() {
  return (
    <ServicePage
      title="Improve Retention"
      subtitle="Develop a Plan to Improve Retention!"
      blogPosts={[
        { title: "The Root Cause To Lost Profits", href: "#" },
        { title: "4 Ways to Deal with Change", href: "#" },
        { title: "Education vs Training: What's More Important?", href: "#" },
      ]}
    >
      <h2 className="font-heading text-2xl font-bold text-navy mb-4">
        Do you have a plan?
      </h2>
      <p>
        Did you know that over 1/3 of new employees quit their jobs within a
        month? What about the fact that it can cost up to $10,000 just to
        replace ONE employee?
      </p>
      <p className="mt-4">
        A company&apos;s most valuable resource is its employees, and retaining
        that resource is vital to success. High turnover rates and absenteeism
        are issues that hinder growth, slow productivity, and waste money. If
        you don&apos;t have a plan to reduce turnover, you need one today.
      </p>
      <p className="mt-4">
        Success Plus possesses the expertise to help you develop a thorough plan
        to prevent turnover and retain your workforce. Contact Success Plus
        today to learn more.
      </p>
    </ServicePage>
  );
}
