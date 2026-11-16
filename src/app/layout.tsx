import type { Metadata, Viewport } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/spotlight";
import { site } from "@/lib/site";
import { homeDescription, ids, ldJson, ogImage } from "@/lib/seo";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Strengthen Organizational Performance Through People`,
    template: `%s | ${site.name}`,
  },
  description: homeDescription,
  applicationName: site.name,
  authors: [{ name: "Isaac Russell" }],
  keywords: [
    "organizational performance consulting",
    "leadership development",
    "leadership coaching",
    "executive coach",
    "management training",
    "employee retention",
    "diversity coaching",
    "strategic planning",
    "keynote speaker",
    "Isaac Russell",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.name} | Strengthen Organizational Performance Through People`,
    description: homeDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@successplusllc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/images/logo-square.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#15163f",
};

const address = {
  "@type": "PostalAddress",
  streetAddress: site.addresses.mailing.street,
  addressLocality: site.addresses.mailing.city,
  addressRegion: site.addresses.mailing.region,
  postalCode: site.addresses.mailing.postal,
  addressCountry: "US",
};

/** Sitewide entity graph: the firm, the website, Isaac, and his book. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": ids.org,
      name: site.name,
      alternateName: site.shortName,
      slogan: site.brandLine,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo-square.png` },
      image: `${site.url}${ogImage.url}`,
      description: site.description,
      telephone: `+1-${site.phone}`,
      foundingDate: String(site.founded),
      founder: { "@id": ids.isaac },
      address,
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: [
        "Leadership development",
        "Leadership coaching",
        "Organizational performance",
        "Employee retention",
        "Diversity coaching",
        "Strategic planning",
        "Talent development",
        "Mentoring",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+1-${site.phone}`,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English",
        url: `${site.url}/contact`,
      },
      sameAs: Object.values(site.social),
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: site.url,
      name: site.name,
      description: homeDescription,
      publisher: { "@id": ids.org },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": ids.isaac,
      name: "Isaac Russell",
      jobTitle: "Founder & CEO",
      description:
        "Leadership coach, organizational performance consultant, author, and speaker. Founded Success Plus Consulting in 1993 after starting his career as an hourly factory worker.",
      url: `${site.url}/about`,
      image: `${site.url}/images/isaac-portrait.webp`,
      worksFor: { "@id": ids.org },
      knowsAbout: ["Leadership", "Employee retention", "Organizational performance", "Manufacturing leadership"],
    },
    {
      "@type": "Book",
      "@id": ids.book,
      name: "Improving Profits Through People",
      author: { "@id": ids.isaac },
      image: `${site.url}/images/book-cover.webp`,
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${site.name} Blog`} href="/feed.xml" />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-gold px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Spotlight />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(jsonLd) }}
        />
      </body>
    </html>
  );
}
