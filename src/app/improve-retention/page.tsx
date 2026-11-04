import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Success Plus has the expertise to help you develop a thorough plan to prevent turnover and retain your workforce.";

export const metadata = pageMeta("Improve Retention", intro, "/improve-retention");

export default function ImproveRetentionPage() {
  return (
    <ServicePage href="/improve-retention" subtitle="Develop a plan to improve retention" intro={intro}>
      <h2>Do you have a plan?</h2>
      <p className="lead">
        Did you know that over 1/3 of new employees quit their jobs within a month? What about the fact that it can
        cost up to $10,000 just to replace <strong>one</strong> employee?
      </p>
      <p>
        A company&apos;s most valuable resource is its employees, and retaining that resource is vital to success.
        High turnover rates and absenteeism are issues that hinder growth, slow productivity, and waste money. If you
        don&apos;t have a plan to reduce turnover, you need one today.
      </p>
      <p>
        Success Plus possesses the expertise to help you develop a thorough plan to prevent turnover and retain your
        workforce. Contact Success Plus today to learn more.
      </p>
    </ServicePage>
  );
}
