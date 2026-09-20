const coverages = [
  {
    title: "Commercial General Liability",
    body: "Protection against third-party claims for bodily injury and property damage. Competitive limits available — contact us for a tailored quote.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.17 9 11.37C17.25 22.17 21 17.25 21 12V7l-9-5z"
          stroke="var(--color-amber)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pollution Liability",
    body: "Coverage for isocyanate and MDI chemical exposure risks unique to spray foam. Tailored limits based on your operations.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C9 7 6 10 6 14a6 6 0 0012 0c0-4-3-7-6-12z"
          stroke="var(--color-amber)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Products & Completed Operations",
    body: "Covers claims arising from your completed spray foam work after the job is done.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
          stroke="var(--color-amber)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Auto",
    body: "Protection for your spray foam rigs, trucks, and mobile equipment on Canadian roads.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="8" width="22" height="10" rx="2" stroke="var(--color-amber)" strokeWidth="1.75" />
        <path d="M1 12h22" stroke="var(--color-amber)" strokeWidth="1.75" />
        <circle cx="6" cy="18" r="2" stroke="var(--color-amber)" strokeWidth="1.75" />
        <circle cx="18" cy="18" r="2" stroke="var(--color-amber)" strokeWidth="1.75" />
        <path d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2" stroke="var(--color-amber)" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Workers Compensation",
    body: "We help you understand your provincial WCB obligations — WSIB, CNESST, WorkSafeBC and more — and coordinate coverage where applicable.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2a5 5 0 00-5 5v1H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2h-2V7a5 5 0 00-5-5z"
          stroke="var(--color-amber)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 7a3 3 0 006 0" stroke="var(--color-amber)" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Surety Bonds",
    body: "Licence, permit, and performance bonds to instil confidence in your clients.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--color-amber)" strokeWidth="1.75" />
        <path d="M7 9h10M7 12h10M7 15h6" stroke="var(--color-amber)" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M15 14l2 2 3-3" stroke="var(--color-amber)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function CoverageGrid() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Insurance Coverage Built for SPF Contractors
          </h2>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
            Every policy is designed for the unique risks of spray foam installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverages.map((card) => (
            <div
              key={card.title}
              className="group relative bg-[var(--color-bg-elev)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-amber)] transition-colors overflow-hidden"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{card.body}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-green)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
