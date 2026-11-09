import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Coaching for leaders at every level, built around the expectations, people, and results they're responsible for.";

export const metadata = pageMeta("Leadership Coaching", intro, "/leadership-coaching");

export default function LeadershipCoachingPage() {
  return (
    <ServicePage href="/leadership-coaching" subtitle="Leadership Development" intro={intro}>
      <h2>Most leaders were never taught to lead.</h2>
      <p className="lead">
        People are usually promoted because they were good at the work. Then they&apos;re asked to lead the people who
        do it, often without a plan for how.
      </p>
      <p>
        How will you set expectations? How will you hold people accountable without losing them? How will you keep a
        team motivated when the pressure is on? Leaders who can&apos;t answer those questions end up managing problems
        instead of building performance.
      </p>
      <h3>How we work with your leaders</h3>
      <p>
        We start by listening: to the leader, to their manager, and to the people they lead. Then we coach alongside
        them in the real work, not in a classroom, so new habits get practiced where they matter.
      </p>
      <ul>
        <li>A clear leadership plan for goals, expectations, and follow-through</li>
        <li>Practical tools for accountability, feedback, and difficult conversations</li>
        <li>Coaching on motivating and recognizing people</li>
        <li>Ongoing support as situations change, not a one-time workshop</li>
      </ul>
      <h3>What changes</h3>
      <p>
        We measure success by what leaders do differently and what that does for the business: stronger relationships
        with employees, fewer repeat problems, and teams that hit the numbers that matter.
      </p>
    </ServicePage>
  );
}
