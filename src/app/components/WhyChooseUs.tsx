export function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-bg-elev)] border-y border-[var(--color-border)] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Section image — spray foam equipment/rig, shows we know the trade */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
              <img
                src="/images/equipment-coverage.webp"
                alt="Spray foam rig and equipment — we insure what you work with"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Why Canadian SPF Contractors Choose Us
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="var(--color-amber)" strokeWidth="1.75" />
                    <circle cx="12" cy="12" r="3" stroke="var(--color-amber)" strokeWidth="1.75" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="var(--color-amber)" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">SPF-Specialized Underwriting</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">We understand the unique risks of spray foam — from isocyanate handling to CAN/ULC-S705.2 installation standards. Your policy is built for your trade, not adapted from a generic template.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3l1.5 3.5 3.5-.5-2 3 3 1-2.5 2.5 1 3.5-3.5-1.5V19h-2v-3.5L8.5 17l1-3.5L7 11l3-1-2-3 3.5.5L12 3z"
                      stroke="var(--color-amber)"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path d="M10 19h4" stroke="var(--color-amber)" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Canadian Regulatory Knowledge</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">From WSIB in Ontario to CNESST in Quebec, we know the provincial workers' comp landscape. We help ensure your coverage aligns with provincial building codes and the National Fire Code.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="var(--color-amber)" strokeWidth="1.75" />
                    <path d="M12 7v5l3 3" stroke="var(--color-amber)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Same-Day Quotes</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">Most quotes returned within hours. Our system pre-understands SPF risk, so we move faster than a general brokerage. Get covered before your next job starts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
