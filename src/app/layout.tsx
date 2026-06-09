import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdmissionsBanner from "@/components/AdmissionsBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE = "https://www.stutterheimschool.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Stutterheim International School | Private School Eastern Cape",
    template: "%s | Stutterheim International School",
  },
  description:
    "Stutterheim International School — a leading private school in the Eastern Cape offering Pre-School to Grade 9, 20+ subjects, boarding facilities, and holistic learner development.",
  keywords: [
    "private school Stutterheim",
    "boarding school Eastern Cape",
    "independent school Eastern Cape",
    "private primary school Eastern Cape",
    "private school Eastern Cape",
    "SIS Stutterheim",
    "Stutterheim International School",
  ],
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    title: "Stutterheim International School | Private School Eastern Cape",
    description:
      "A leading private school in Stutterheim, Eastern Cape — offering Grade R to Grade 9, boarding facilities, and 20+ subjects.",
    url: BASE,
    siteName: "Stutterheim International School",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stutterheim International School — Private School Eastern Cape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stutterheim International School | Private School Eastern Cape",
    description:
      "A leading private school in Stutterheim, Eastern Cape — Grade R to Grade 9, boarding facilities, 20+ subjects.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/favicon-180.png", sizes: "180x180", type: "image/png" },
  },
  verification: {
    google: "",   // add Search Console verification token when ready
  },
};

/* ── Structured Data (JSON-LD) ─────────────────────────────────────────── */
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${BASE}/#school`,
      name: "Stutterheim International School",
      alternateName: "SIS",
      url: BASE,
      logo: `${BASE}/images/logo.png`,
      image: `${BASE}/og-image.jpg`,
      description:
        "Stutterheim International School is a private independent school in Stutterheim, Eastern Cape, offering Pre-School to Grade 9 with 20+ subjects, boarding facilities, and holistic education.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "49 Louisa Street",
        addressLocality: "Stutterheim",
        addressRegion: "Eastern Cape",
        postalCode: "4930",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -32.5667,
        longitude: 27.4167,
      },
      telephone: "+27673977613",
      email: "sis@stutterheimschool.co.za",
      sameAs: [],
      hasMap: "https://maps.google.com/?q=49+Louisa+Street+Stutterheim",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "15:30",
        },
      ],
      priceRange: "R1,300/month",
      currenciesAccepted: "ZAR",
      paymentAccepted: "Cash, EFT",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "Stutterheim International School",
      publisher: { "@id": `${BASE}/#school` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/gallery?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E8EAEE] text-[#1F1F1F] font-[var(--font-geist-sans)]">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {/* Sticky header: banner + navbar */}
        <div className="sticky top-0 left-0 right-0 z-50">
          <AdmissionsBanner />
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
