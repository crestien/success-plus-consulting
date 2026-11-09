import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "A working session to design or improve how your organization prepares new leaders for the role.";

export const metadata = pageMeta("Leadership Trainee Program", intro, "/leadership-trainee-program");

export default function LeadershipTraineeProgramPage() {
  return (
    <ServicePage href="/leadership-trainee-program" subtitle="Specialty program" intro={intro}>
      <h2>How do your new leaders learn the job?</h2>
      <p className="lead">
        In many organizations, new supervisors learn by trial and error. The cost shows up in turnover, mistakes, and
        leaders who burn out before they find their footing.
      </p>
      <p>
        A defined process for bringing up new leaders changes that. It sets clear expectations from day one, pairs
        trainees with the right people, and gives them a path to competence instead of leaving it to chance.
      </p>
      <h3>In the session, we&apos;ll cover</h3>
      <ul>
        <li>Why a structured leadership trainee process matters for productivity and retention</li>
        <li>What your current process looks like and where it falls short</li>
        <li>The core pieces of a strong program, adapted to your organization</li>
        <li>Next steps to build or improve your own</li>
      </ul>
    </ServicePage>
  );
}
