import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "One-to-one mentoring sessions for every level of leadership, with a personal, hands-on approach.";

export const metadata = pageMeta("One to One Mentoring", intro, "/one-to-one-mentoring");

export default function OneToOneMentoringPage() {
  return (
    <ServicePage href="/one-to-one-mentoring" subtitle="Find out how Success Plus helps leaders" intro={intro}>
      <h2>What challenges are you facing today?</h2>
      <p className="lead">
        Even the best of the best leaders rely on coaches and mentors for valuable insight, constructive criticism,
        and actionable feedback to help them grow and develop into better leaders.
      </p>
      <p>
        At Success Plus, we offer one-to-one mentoring sessions for every level of leadership. We take a personal,
        hands-on approach and provide an objective perspective to help leaders navigate real life situations and the
        day to day problems they may bring.
      </p>
      <p>Contact Success Plus today for information about One to One Mentoring.</p>
    </ServicePage>
  );
}
