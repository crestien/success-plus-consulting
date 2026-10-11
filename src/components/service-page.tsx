import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  blogPosts?: { title: string; href: string }[];
}

export function ServicePage({ title, subtitle, children, blogPosts }: ServicePageProps) {
  return (
    <div>
      <section className="bg-navy text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gold max-w-2xl uppercase tracking-wide font-semibold">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {children}
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-8 py-3 rounded uppercase tracking-wider transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Contact Success Plus
                </Link>
              </div>
            </div>

            <aside>
              {blogPosts && blogPosts.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3
                    className="text-xl font-bold text-navy mb-4"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    From the Blog
                  </h3>
                  <ul className="space-y-3">
                    {blogPosts.map((post, i) => (
                      <li key={i}>
                        <span className="group flex items-start gap-2 text-sm text-gray-700 hover:text-navy cursor-pointer transition-colors">
                          <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                          {post.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-navy rounded-lg p-6 mt-6 text-white text-center">
                <h3
                  className="text-lg font-bold text-gold mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Ready to Get Started?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Call us today for a free needs assessment.
                </p>
                <a
                  href="tel:8444677587"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy-dark font-bold px-6 py-2.5 rounded text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  844-467-7587
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
