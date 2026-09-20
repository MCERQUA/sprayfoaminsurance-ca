"use client";

import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Hero video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay — perceptible but light, to keep white text readable */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Radial amber glow on top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Spray Foam Insurance for<br className="hidden md:block" /> Canadian Contractors
        </h1>

        <p className="text-lg text-[var(--color-muted)] max-w-2xl">
          Specialized commercial insurance tailored to your spray foam business.
          Quote requests accepted coast to coast.
        </p>

        {/* CTA */}
        <Button
          variant="primary"
          className="text-base px-8 py-3"
          onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Your Free Quote
        </Button>

        {/* Trust strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 text-sm text-[var(--color-muted)]">
          {/* Badge 1 */}
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L3 7v5c0 5.25 3.75 10.17 9 11.37C17.25 22.17 21 17.25 21 12V7l-9-5z"
                stroke="var(--color-amber)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Trusted SPF Insurance Experts</span>
          </div>

          <span className="hidden sm:block text-[var(--color-border)]">|</span>

          {/* Badge 2 */}
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                stroke="var(--color-amber)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>PIPEDA-Compliant Privacy</span>
          </div>

          <span className="hidden sm:block text-[var(--color-border)]">|</span>

          {/* Badge 3 */}
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="var(--color-amber)" strokeWidth="2" />
              <path d="M12 7v5l3 3" stroke="var(--color-amber)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Same-Day Quotes</span>
          </div>
        </div>

        {/* Agent credibility */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <img
            src="/images/josh-cotner.webp"
            alt="Josh Cotner, Canadian spray foam insurance specialist"
            className="w-16 h-16 rounded-full border-2 border-[var(--color-amber)] object-cover"
          />
          <span className="text-xs text-[var(--color-muted)]">Josh Cotner — Insurance Specialist</span>
        </div>
      </div>
    </section>
  );
}
