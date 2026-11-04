import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Our diversity coaching sessions teach leaders how to manage, respect, and motivate a diverse workforce.";

export const metadata = pageMeta("Diversity Coaching", intro, "/diversity-coaching");

export default function DiversityCoachingPage() {
  return (
    <ServicePage href="/diversity-coaching" subtitle="Learn more about diversity coaching" intro={intro}>
      <h2>How well do you know your employees?</h2>
      <p className="lead">
        The Millennial generation is the most diverse generation to ever come through our country. They make up the
        largest share of the workforce. This makes diversity in the workplace more important than ever.
      </p>
      <p>
        Understanding and respecting workers&apos; heritage, race, religion, sexual orientation, and gender is
        becoming a crucial aspect of success. Insensitivity and ignorance are barriers to a productive workplace,
        even when they&apos;re not deliberate.
      </p>
      <p>
        Our diversity coaching sessions teach leaders how to manage, respect, and motivate a diverse workforce for a
        stronger, productive, and more profitable business.
      </p>
    </ServicePage>
  );
}
