import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "A one-hour session on why an official training process matters, and how to create or improve your own.";

export const metadata = pageMeta("Leadership Trainee Program", intro, "/leadership-trainee-program");

export default function LeadershipTraineeProgramPage() {
  return (
    <ServicePage href="/leadership-trainee-program" subtitle="Learn more about this program" intro={intro}>
      <h2>Build a process.</h2>
      <p className="lead">
        The Leadership Trainee Program is a one hour session that demonstrates the importance of having an official
        training process for your business.
      </p>
      <p>
        We&apos;ll discuss how this process can increase productivity, reduce turnover, and create an overall better
        work culture; and we&apos;ll help you on the path to creating or improving a process of your own.
      </p>
      <p>
        <strong>Contact us to learn more about our trainee program.</strong>
      </p>
    </ServicePage>
  );
}
