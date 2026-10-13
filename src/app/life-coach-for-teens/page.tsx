import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Life Coach For Teens - Success Plus Consulting",
  description:
    "At Success Plus, we offer a Teen Mentoring Program to help teenagers build a better future for themselves.",
};

export default function LifeCoachForTeensPage() {
  return (
    <ServicePage
      title="Life Coach for Teens"
      subtitle="Let Us Help Your Teens"
      image="/images/services/teens.jpg"
      imageAlt="Teen mentoring"
      blogPosts={[]}
    >
      <h2 className="text-2xl font-bold text-navy mb-4" style={{ fontFamily: "Georgia, serif" }}>
        What Can We Do For Your Teen?
      </h2>
      <p>
        Teenagers today face more challenges than many generations before them.
        95% of teens say that they&apos;ve felt inferior at some point in their
        lives. Not only that, 83% of boys and 79% of girls say they&apos;ve
        been bullied either at school or online. Even worse, roughly 1.2
        million teens will drop out of high school this year, increasing their
        chances of living in poverty or falling into crime.
      </p>
      <p className="mt-4">
        At Success Plus, we take these statistics seriously, and believe
        strongly in helping teens build a better future for themselves.
        That&apos;s why we offer a Teen Mentoring Program.
      </p>
      <p className="mt-4">
        In these sessions, we teach teenagers how to construct a life plan, set
        and achieve goals, battle peer-pressure, build self-confidence, and
        make smart, objective decisions so that they can find success in their
        lives. Contact Success Plus today.
      </p>
    </ServicePage>
  );
}
