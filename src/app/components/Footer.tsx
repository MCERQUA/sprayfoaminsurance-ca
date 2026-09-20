export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
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
            <a
              href="mailto:quotes@sprayfoaminsurance.ca"
              className="flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
              quotes@sprayfoaminsurance.ca
            </a>
            <span className="flex items-center gap-2 text-[var(--color-muted)] text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
              </svg>
              Serving all provinces and territories
            </span>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <a href="#" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">
              Terms of Service
            </a>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed max-w-xs">
              Not legal or tax advice. Coverage subject to underwriter approval.
            </p>
          </div>

          {/* Coverage */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Coverage</h4>
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                  stroke="var(--color-green)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Commercial General Liability
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                  stroke="var(--color-green)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pollution &amp; Products Liability
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                  stroke="var(--color-green)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tools &amp; Equipment
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col gap-3 text-center">
          <p className="text-xs text-[var(--color-muted)] max-w-3xl mx-auto leading-relaxed">
            Insurance products and availability vary by province. Coverage is subject to underwriter approval and applicable provincial licensing requirements. This website is for informational purposes only and does not constitute a binding insurance offer. Consult a licensed insurance advisor for specific coverage advice.
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            &copy; 2026 Spray Foam Insurance Canada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
