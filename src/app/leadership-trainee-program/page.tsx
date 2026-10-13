import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Leadership Trainee Program - Success Plus Consulting",
  description:
    "The Leadership Trainee Program demonstrates the importance of having an official training process for your business.",
};

export default function LeadershipTraineeProgramPage() {
  return (
    <ServicePage
      title="Leadership Trainee Program"
      subtitle="Learn More About This Program"
      image="/images/services/trainee.jpg"
      imageAlt="Leadership trainee program"
      blogPosts={[]}
    >
      <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "Georgia, serif" }}>
        Build a Process.
      </h2>
      <p>
        The Leadership Trainee Program is a one hour session that demonstrates
        the importance of having an official training process for your business.
        We&apos;ll discuss how this process can increase productivity, reduce
        turnover, and create an overall better work culture; and we&apos;ll
        help you on the path to creating or improving a process of your own.
      </p>
      <p className="mt-4 text-xl font-semibold text-navy">
        Learn more about our trainee program.
      </p>
    </ServicePage>
  );
}
