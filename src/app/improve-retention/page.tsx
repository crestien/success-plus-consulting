import { ServicePage } from "@/components/service-page";
import { pageMeta } from "@/lib/seo";

const intro =
  "Find out why people are really leaving, then build a retention plan your leaders can carry out every day.";

export const metadata = pageMeta("Improve Retention", intro, "/improve-retention");

export default function ImproveRetentionPage() {
  return (
    <ServicePage href="/improve-retention" subtitle="Organizational Performance" intro={intro}>
      <h2>Turnover is a symptom.</h2>
      <p className="lead">
        Every person who walks out the door takes training, experience, and momentum with them. Replacing them costs
        time, money, and productivity, and the people who stay feel it too.
      </p>
      <p>
        Pay and schedules matter, but they&apos;re rarely the whole story. People most often leave a supervisor, a
        culture, or a set of expectations that was never made clear. That&apos;s why we look past the exit numbers to
        what&apos;s happening on the floor.
      </p>
      <h3>How we approach retention</h3>
      <ul>
        <li>Assess where and why turnover and absenteeism are happening</li>
        <li>Identify the leadership, culture, and process issues behind them</li>
        <li>Build a retention plan around your workforce, not a template</li>
        <li>Equip supervisors with the standard work and habits to carry it out</li>
        <li>Measure the results and adjust as your organization changes</li>
      </ul>
      <h3>What it can look like</h3>
      <p>
        At a Tyson Foods plant in Alabama, this approach helped leadership reduce turnover by more than 30 percent and
        absenteeism by 10 percent. Every organization is different, so your plan will be too.
      </p>
    </ServicePage>
  );
}
