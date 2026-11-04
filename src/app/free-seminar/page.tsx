import { ContactForm } from "@/components/contact-form";
import { EventTypes, PageHero } from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Free Seminar",
  "Request a free seminar from Isaac Russell at your next event. Decades of experience with some of the biggest brands in America.",
  "/free-seminar",
);

export default function FreeSeminarPage() {
  return (
    <div>
      <PageHero
        eyebrow="At your next event"
        title="Request a free seminar."
        subtitle="Bring Isaac Russell’s results-oriented leadership lessons to your organization, chamber, or association."
        crumbs={[{ name: "Free Seminar" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="prose-sp">
              <p className="lead">
                Isaac Russell, CEO and Founder of Success Plus, has decades of experience working with some of the
                biggest, most recognized brands in America.
              </p>
              <p>
                His knowledge, expert analysis, and training philosophy have helped companies like Coca-Cola, Tyson
                Foods, and Johnsonville increase productivity, reduce turnover, and create an overall better, and more
                profitable, work environment.
              </p>
            </div>
            <div className="mt-12">
              <EventTypes />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="card-surface p-7 sm:p-10">
              <h2 className="font-display text-3xl font-medium text-ink">Send a request</h2>
              <p className="mt-2 mb-8 text-muted-foreground">
                Fill out the form and we&apos;ll contact you about availability.
              </p>
              <ContactForm subject="Free seminar request" eventFields submitLabel="Request a seminar" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
