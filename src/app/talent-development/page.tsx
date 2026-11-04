import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "We help leaders develop the critical skills that only come through on-the-job experience.";

export const metadata = pageMeta("Talent Development", intro, "/talent-development");

export default function TalentDevelopmentPage() {
  return (
    <ServicePage href="/talent-development" subtitle="Reach your full potential" intro={intro}>
      <h2>Learn real leadership skills that can&apos;t be taught in the classroom.</h2>
      <p className="lead">
        Many new leaders coming up in the world today are highly educated individuals, with most boasting a
        master&apos;s degree or higher. And while a good education is to be commended, there are many aspects of being
        a leader that you simply can&apos;t learn in a classroom.
      </p>
      <p>
        Too often we hear about talent management, but not enough about talent development. And at Success Plus,
        we&apos;re in the business of developing talent.
      </p>
      <p>
        In these sessions, we help leaders develop critical skills that only come through on the job experience. We
        cover topics such as cost savings, motivation, productivity, efficiency, and the soft skills needed to
        develop and lead others.
      </p>
    </ServicePage>
  );
}
