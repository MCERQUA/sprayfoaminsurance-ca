"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <img src="/images/logo.webp" alt="Spray Foam Insurance Canada" className="h-10 w-auto" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:18887738686"
            className="flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
            1-888-SPF-QUOTE
          </a>
          <Button variant="primary" onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}>
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-4 flex flex-col gap-4">
          <a
            href="tel:18887738686"
            className="flex items-center gap-2 text-[var(--color-muted)] text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
            1-888-SPF-QUOTE
          </a>
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get a Free Quote
          </Button>
        </div>
      )}
    </header>
  );
}
