import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — Spray Foam Insurance Canada",
  description:
    "The page you requested was not found. Return to Spray Foam Insurance Canada for commercial insurance information and a free quote.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-20 text-center">
      <h1 className="text-7xl md:text-9xl font-extrabold text-[var(--color-accent,#f59e0b)] leading-none">
        404
      </h1>
      <h2 className="mt-2 text-2xl md:text-3xl font-bold">Page Not Found</h2>
      <p className="mt-4 max-w-md text-base text-[var(--color-muted,#94a3b8)]">
        The page you were looking for has moved or no longer exists. Head back to the homepage to
        explore commercial insurance coverage for Canadian spray foam contractors.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-block bg-[var(--color-accent,#f59e0b)] text-black font-bold px-8 py-3.5 rounded-md hover:opacity-90 transition"
        >
          Back to Homepage
        </Link>
        <Link
          href="/quote"
          className="inline-block border border-[var(--color-accent,#f59e0b)] text-[var(--color-accent,#f59e0b)] font-bold px-8 py-3.5 rounded-md hover:bg-[var(--color-accent,#f59e0b)] hover:text-black transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </main>
  );
}
