import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Our Teen Mentoring Program helps teenagers set goals, build confidence, and create a plan for their future.";

export const metadata = pageMeta("Life Coach for Teens", intro, "/life-coach-for-teens");

export default function LifeCoachForTeensPage() {
  return (
    <ServicePage href="/life-coach-for-teens" subtitle="Specialty program" intro={intro}>
      <h2>What can we do for your teen?</h2>
      <p className="lead">
        Teenagers face real pressure today, from school and social media to the people around them. Many have the
        potential to succeed but no clear plan for how to get there.
      </p>
      <p>
        The same principles we bring to leaders in the workplace apply to young people: clear goals, personal
        accountability, and someone in their corner who believes they can succeed.
      </p>
      <h3>What teens work on</h3>
      <ul>
        <li>Building a personal life plan</li>
        <li>Setting goals and following through on them</li>
        <li>Standing up to peer pressure</li>
        <li>Building self-confidence</li>
        <li>Making smart, thoughtful decisions</li>
      </ul>
      <p>
        Every teen is different, so we start by listening to them and their family, then build the mentoring around
        their goals.
      </p>
    </ServicePage>
  );
}
