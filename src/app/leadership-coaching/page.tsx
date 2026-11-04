import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "In our Leadership Coaching sessions, we help leaders build a successful plan and put the business on the path to success.";

export const metadata = pageMeta("Leadership Coaching", intro, "/leadership-coaching");

export default function LeadershipCoachingPage() {
  return (
    <ServicePage href="/leadership-coaching" subtitle="Discover how to become a great leader" intro={intro}>
      <h2>Build a plan.</h2>
      <p className="lead">
        The number one reason leaders fail is because they enter the leadership role without a plan that answers
        some of the most important questions that need to be addressed.
      </p>
      <p>
        How will you enforce company policies? How will you set goals? How will you ensure those goals are met? How
        will you keep your workforce motivated and productive?
      </p>
      <p>
        In our Leadership Coaching sessions, we help leaders build a successful plan to address these questions and
        put the business on the path to success.
      </p>
      <p>
        <strong>Are you ready to step up to the challenge?</strong>
      </p>
    </ServicePage>
  );
}
