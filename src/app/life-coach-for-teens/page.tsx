import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Our Teen Mentoring Program helps teenagers set goals, build confidence, and create a better future for themselves.";

export const metadata = pageMeta("Life Coach for Teens", intro, "/life-coach-for-teens");

export default function LifeCoachForTeensPage() {
  return (
    <ServicePage href="/life-coach-for-teens" subtitle="Let us help your teens" intro={intro}>
      <h2>What can we do for your teen?</h2>
      <p className="lead">
        Teenagers today face more challenges than many generations before them. 95% of teens say that they&apos;ve
        felt inferior at some point in their lives.
      </p>
      <p>
        Not only that, 83% of boys and 79% of girls say they&apos;ve been bullied either at school or online. Even
        worse, roughly 1.2 million teens will drop out of high school this year, increasing their chances of living
        in poverty or falling into crime.
      </p>
      <p>
        At Success Plus, we take these statistics seriously, and believe strongly in helping teens build a better
        future for themselves. That&apos;s why we offer a Teen Mentoring Program.
      </p>
      <p>
        In these sessions, we teach teenagers how to construct a life plan, set and achieve goals, battle
        peer-pressure, build self-confidence, and make smart, objective decisions so that they can find success in
        their lives. Contact Success Plus today.
      </p>
    </ServicePage>
  );
}
