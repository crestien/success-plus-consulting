import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Using a unique method of strategic planning, Success Plus helps business leaders create, define, and execute their short and long term goals.";

export const metadata = pageMeta("Strategic Planning", intro, "/strategic-planning");

export default function StrategicPlanningPage() {
  return (
    <ServicePage href="/strategic-planning" subtitle="Create your strategy today" intro={intro}>
      <h2>Do you know where your business is headed?</h2>
      <p className="lead">
        Too many businesses make the mistake of trying to execute 100 ideas without a focused strategy. That&apos;s a
        quick path to failure. Without direction, there is no success.
      </p>
      <p>
        Using a unique method of strategic planning, Success Plus helps business leaders create, define, and execute
        their short and long term goals. Start building your plan today.
      </p>
    </ServicePage>
  );
}
