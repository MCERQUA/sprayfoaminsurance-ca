import type { Metadata } from "next";
import { QuoteForm } from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get Your Quote — Spray Foam Insurance Canada",
  description:
    "Free commercial insurance quote for Canadian spray foam contractors. Voice-assisted form for tradeshow on-the-spot capture.",
  // Allow indexing of the standalone form page; voice agent canvas embeds it via iframe.
  robots: { index: true, follow: true },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <div className="flex-1 w-full">
        <QuoteForm embed />
      </div>
    </main>
  );
}
