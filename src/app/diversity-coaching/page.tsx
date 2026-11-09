import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Help your leaders lead, respect, and motivate every person on a diverse team, and connect it to business results.";

export const metadata = pageMeta("Diversity Coaching", intro, "/diversity-coaching");

export default function DiversityCoachingPage() {
  return (
    <ServicePage href="/diversity-coaching" subtitle="Organizational Performance" intro={intro}>
      <h2>How well do your leaders know their people?</h2>
      <p className="lead">
        Today&apos;s workforce brings together people of different backgrounds, generations, cultures, and beliefs.
        That&apos;s a strength, but only when leaders know how to bring it together.
      </p>
      <p>
        Misunderstandings and insensitivity, even unintentional ones, chip away at trust, engagement, and
        productivity. A statement in the handbook doesn&apos;t fix that. Leaders do, through how they communicate, set
        expectations, and treat people every day.
      </p>
      <h3>How we help</h3>
      <ul>
        <li>Understand the makeup and dynamics of your workforce</li>
        <li>Coach leaders to adapt their style to the people they lead</li>
        <li>Connect your diversity goals to your business objectives</li>
        <li>Build respect and accountability into daily leadership, not a one-time presentation</li>
      </ul>
      <p>
        Our coaching is grounded in real-world experience, from the C-suite to third shift. The goal is a workplace
        where every person is respected and motivated to do their best work.
      </p>
    </ServicePage>
  );
}
