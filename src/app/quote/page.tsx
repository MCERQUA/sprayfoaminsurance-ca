import type { Metadata } from "next";
import { QuoteForm } from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get Your Quote — Spray Foam Insurance Canada",
  description:
    "Free commercial insurance quote for Canadian spray foam contractors. Voice-assisted form for tradeshow on-the-spot capture.",
  // Allow indexing of the standalone form page; voice agent canvas embeds it via iframe.
  robots: { index: true, follow: true },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sprayfoaminsurance.ca/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Get a Quote",
      item: "https://sprayfoaminsurance.ca/quote",
    },
  ],
};

export default function QuotePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="flex-1 w-full">
        <QuoteForm embed />
      </div>
    </main>
  );
}
