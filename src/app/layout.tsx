import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spray Foam Insurance Canada | Commercial Insurance for SPF Contractors",
  description:
    "Specialized commercial insurance for Canadian spray foam contractors. CGL, pollution liability, workers’ comp, and more. Get a free quote today.",
};

const SITE_URL = "https://sprayfoaminsurance.ca";

// Organization / InsuranceAgency schema — describes the brokerage itself.
const insuranceAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Spray Foam Insurance Canada",
  url: SITE_URL,
  description:
    "Specialized commercial insurance brokerage for Canadian spray polyurethane foam (SPF) contractors. CGL, pollution liability, workers' comp, commercial auto, and surety bonds tailored to SPF operations.",
  telephone: "+1-888-773-8686",
  email: "quotes@sprayfoaminsurance.ca",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  knowsAbout: [
    "Spray polyurethane foam insurance",
    "SPF contractor liability",
    "Isocyanate and MDI chemical exposure risk",
    "CAN/ULC-S705.2 installation standards",
    "Canadian provincial workers' compensation (WSIB, CNESST, WorkSafeBC)",
    "Commercial general liability",
    "Pollution liability",
    "Products and completed operations",
    "Commercial auto for spray foam rigs",
    "Surety bonds",
  ],
};

// WebSite schema — establishes the canonical site entity.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Spray Foam Insurance Canada",
  inLanguage: "en-CA",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// Service schema — only the coverages actually listed on the site.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  serviceType: "Commercial Insurance for Spray Foam Contractors",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Canada" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Spray polyurethane foam (SPF) contractors",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SPF Contractor Insurance Coverages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial General Liability",
          description:
            "Protection against third-party claims for bodily injury and property damage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pollution Liability",
          description:
            "Coverage for isocyanate and MDI chemical exposure risks unique to spray foam.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Products & Completed Operations",
          description:
            "Covers claims arising from completed spray foam work after the job is done.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Auto",
          description:
            "Protection for spray foam rigs, trucks, and mobile equipment on Canadian roads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workers Compensation Coordination",
          description:
            "Guidance on provincial WCB obligations including WSIB, CNESST, and WorkSafeBC.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Surety Bonds",
          description:
            "Licence, permit, and performance bonds for spray foam contractors.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencyJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
