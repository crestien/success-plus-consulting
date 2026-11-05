import type { Metadata, Viewport } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import { ogImage } from "@/lib/seo";
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
  description: site.description,
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
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@successplusllc",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/images/logo-square.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#15163f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo-square.png`,
  image: `${site.url}/images/book-header.jpg`,
  description: site.description,
  telephone: `+1-${site.phone}`,
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: "Isaac Russell", jobTitle: "Founder & CEO" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addresses.mailing.street,
    addressLocality: site.addresses.mailing.city,
    addressRegion: site.addresses.mailing.region,
    postalCode: site.addresses.mailing.postal,
    addressCountry: "US",
  },
  areaServed: "US",
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
