import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "A trusted, objective advisor for leaders working through real situations, at every level of the organization.";

export const metadata = pageMeta("One-to-One Mentoring", intro, "/one-to-one-mentoring");

export default function OneToOneMentoringPage() {
  return (
    <ServicePage href="/one-to-one-mentoring" subtitle="Leadership Development" intro={intro}>
      <h2>What challenge are you facing today?</h2>
      <p className="lead">
        The best leaders don&apos;t figure it out alone. They rely on someone outside the situation for honest insight,
        constructive feedback, and a fresh perspective.
      </p>
      <p>
        One-to-One Mentoring pairs a leader with Isaac Russell or a Success Plus advisor for ongoing, confidential
        conversations about the work in front of them: a difficult employee, a new role, a team that isn&apos;t
        gelling, or a decision with no easy answer.
      </p>
      <h3>Who it&apos;s for</h3>
      <ul>
        <li>Frontline supervisors stepping into leadership for the first time</li>
        <li>Managers taking on larger teams or new responsibilities</li>
        <li>Executives who want a candid sounding board</li>
        <li>High-potential leaders you&apos;re preparing for what&apos;s next</li>
      </ul>
      <p>
        Every mentoring relationship is built around the leader and the goals of the organization. Success is measured
        in how they lead, not how many meetings they attend.
      </p>
    </ServicePage>
  );
}
