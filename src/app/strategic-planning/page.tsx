import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Give your leadership team one clear direction, a plan the whole team owns, and the people to carry it out.";

export const metadata = pageMeta("Strategic Planning", intro, "/strategic-planning");

export default function StrategicPlanningPage() {
  return (
    <ServicePage href="/strategic-planning" subtitle="Strategic Consulting" intro={intro}>
      <h2>Do you know where your organization is headed?</h2>
      <p className="lead">
        Too many organizations try to chase a hundred ideas at once. Without a focused direction, effort gets spread
        thin and people stop knowing what matters most.
      </p>
      <p>
        We facilitate strategic planning with your leadership team to agree on where you&apos;re going, what it will
        take to get there, and who is responsible for each part. Because strategy only works when people carry it out,
        we plan for the leadership and workforce it will require, not just the goals.
      </p>
      <h3>What the process covers</h3>
      <ul>
        <li>An honest assessment of where the organization stands today</li>
        <li>Clear short- and long-term goals the leadership team owns</li>
        <li>Priorities, accountability, and measures for each goal</li>
        <li>The people, succession, and leadership needs behind the plan</li>
        <li>Regular check-ins so the plan adapts as conditions change</li>
      </ul>
      <p>
        The result is a plan that lives in how your leaders make decisions, not in a binder on the shelf.
      </p>
    </ServicePage>
  );
}
