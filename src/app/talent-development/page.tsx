import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Grow the leaders you already have through real work, building the skills that only come from experience.";

export const metadata = pageMeta("Talent Development", intro, "/talent-development");

export default function TalentDevelopmentPage() {
  return (
    <ServicePage href="/talent-development" subtitle="Organizational Performance" intro={intro}>
      <h2>Some leadership skills can&apos;t be learned in a classroom.</h2>
      <p className="lead">
        Education matters. But many of the skills that make someone a strong leader only develop on the job, with the
        right guidance at the right time.
      </p>
      <p>
        Organizations talk a lot about talent management: hiring, reviewing, and retaining people. Far fewer invest in
        talent development, the deliberate work of growing people into the leaders the organization will need next.
        That&apos;s where we focus.
      </p>
      <h3>What we develop</h3>
      <ul>
        <li>The people skills to motivate, coach, and lead others</li>
        <li>Ownership of productivity, efficiency, and cost</li>
        <li>Sound decision-making under real-world pressure</li>
        <li>Communication that builds trust up and down the organization</li>
      </ul>
      <p>
        We work alongside your people in their actual roles, so development shows up in their results and builds a
        stronger bench of leaders for the future.
      </p>
    </ServicePage>
  );
}
