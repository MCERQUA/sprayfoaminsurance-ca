"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface QuoteFormProps {
  /** When true, suppresses the section heading + tightens padding for full-screen / iframe embed use. */
  embed?: boolean;
}

interface FormData {
  businessName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: string;
  postalCode: string;
  yearsInBusiness: string;
  numberOfEmployees: string;
  annualRevenue: string;
  typeOfWork: string[];
  coverageNeeded: string[];
  currentCarrier: string;
  renewalDate: string;
  additionalNotes: string;
  pipedaConsent: boolean;
}

type Errors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  businessName: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  province: "",
  postalCode: "",
  yearsInBusiness: "",
  numberOfEmployees: "",
  annualRevenue: "",
  typeOfWork: [],
  coverageNeeded: [],
  currentCarrier: "",
  renewalDate: "",
  additionalNotes: "",
  pipedaConsent: false,
};

const PROVINCES = [
  { value: "ON", label: "Ontario" },
  { value: "QC", label: "Quebec" },
  { value: "BC", label: "British Columbia" },
  { value: "AB", label: "Alberta" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" },
];

const YEARS_OPTIONS = [
  { value: "lt1", label: "Less than 1 year" },
  { value: "1-3", label: "1–3 years" },
  { value: "3-10", label: "3–10 years" },
  { value: "10+", label: "10+ years" },
];

const EMPLOYEES_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2–5" },
  { value: "6-10", label: "6–10" },
  { value: "11-25", label: "11–25" },
  { value: "26-50", label: "26–50" },
  { value: "50+", label: "50+" },
];

const REVENUE_OPTIONS = [
  { value: "lt250k", label: "Under $250,000" },
  { value: "250k-500k", label: "$250,000 – $500,000" },
  { value: "500k-1m", label: "$500,000 – $1,000,000" },
  { value: "1m-2m", label: "$1,000,000 – $2,000,000" },
  { value: "2m-5m", label: "$2,000,000 – $5,000,000" },
  { value: "5m+", label: "$5,000,000+" },
];

const WORK_TYPES = [
  "Open-cell SPF",
  "Closed-cell SPF",
  "Coating systems",
  "Roofing foam",
  "Industrial",
  "Residential",
  "Commercial",
  "Other",
];

const COVERAGE_TYPES = [
  "General Liability",
  "Commercial Auto",
  "Workers' Comp",
  "Tools and Equipment",
  "Pollution Liability",
  "Bonds",
  "Cyber",
  "Other",
];

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=sprayfoaminsurance-ca";

// --- Shared field styles ---
const inputBase =
  "w-full bg-[#0a0e1a] border rounded-lg px-4 py-3 text-[#e5e7eb] placeholder:text-[#9ca3af]/50 focus:ring-1 outline-none transition-colors";
const inputNormal = `${inputBase} border-[#1f2937] focus:border-[#f59e0b] focus:ring-[#f59e0b]`;
const inputError = `${inputBase} border-red-400 focus:border-red-400 focus:ring-red-400`;

// ---- Sub-components ----

function Label({ children, htmlFor, required }: { children: React.ReactNode; htmlFor: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-[#9ca3af] mb-1 block">
      {children}
      {required && <span className="text-[#f59e0b] ml-0.5">*</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-400 mt-1">{message}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-white mb-4">{children}</h3>;
}

function SectionDivider() {
  return <div className="border-t border-[#1f2937] my-8" />;
}

// ---- Validation ----

function validateField(name: keyof FormData, value: FormData[keyof FormData]): string {
  switch (name) {
    case "businessName": {
      const v = (value as string).trim();
      if (!v) return "Business name is required.";
      if (v.length < 2) return "Business name must be at least 2 characters.";
      return "";
    }
    case "firstName": {
      const v = (value as string).trim();
      if (!v) return "First name is required.";
      if (v.length < 2) return "First name must be at least 2 characters.";
      return "";
    }
    case "lastName": {
      const v = (value as string).trim();
      if (!v) return "Last name is required.";
      if (v.length < 2) return "Last name must be at least 2 characters.";
      return "";
    }
    case "email": {
      const v = (value as string).trim();
      if (!v) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address.";
      return "";
    }
    case "phone": {
      const v = (value as string).trim();
      if (!v) return "Phone number is required.";
      if (!/^[\d\s\-\(\)\+]+$/.test(v)) return "Please enter a valid phone number.";
      return "";
    }
    case "province": {
      if (!value) return "Please select a province or territory.";
      return "";
    }
    case "postalCode": {
      const v = (value as string).toUpperCase().trim();
      if (!v) return "Postal code is required.";
      if (!/^[A-Z]\d[A-Z][ -]?\d[A-Z]\d$/i.test(v))
        return "Please enter a valid Canadian postal code (e.g., M5V 1A1).";
      return "";
    }
    case "yearsInBusiness": {
      if (!value) return "Please select years in business.";
      return "";
    }
    case "numberOfEmployees": {
      if (!value) return "Please select number of employees.";
      return "";
    }
    case "annualRevenue": {
      if (!value) return "Please select annual revenue.";
      return "";
    }
    case "typeOfWork": {
      if ((value as string[]).length === 0) return "Please select at least one type of work.";
      return "";
    }
    case "coverageNeeded": {
      if ((value as string[]).length === 0) return "Please select at least one coverage type.";
      return "";
    }
    case "pipedaConsent": {
      if (!value) return "You must consent to PIPEDA to proceed.";
      return "";
    }
    default:
      return "";
  }
}

// ---- Main Component ----

export function QuoteForm({ embed = false }: QuoteFormProps = {}) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const formDataRef = useRef(formData);
  useEffect(() => { formDataRef.current = formData; }, [formData]);

  const clearError = (name: keyof FormData) => {
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleTextChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleCheckboxGroup = (name: "typeOfWork" | "coverageNeeded", option: string, checked: boolean) => {
    setFormData((prev) => {
      const current = prev[name];
      const next = checked ? [...current, option] : current.filter((v) => v !== option);
      return { ...prev, [name]: next };
    });
    clearError(name);
  };

  const handleConsent = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, pipedaConsent: checked }));
    clearError("pipedaConsent");
  };

  const handleBlur = (name: keyof FormData) => {
    const error = validateField(name, formData[name]);
    if (error) setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const requiredFields: (keyof FormData)[] = [
      "businessName", "firstName", "lastName", "email", "phone",
      "province", "postalCode", "yearsInBusiness", "numberOfEmployees",
      "annualRevenue", "typeOfWork", "coverageNeeded", "pipedaConsent",
    ];
    const newErrors: Errors = {};
    for (const field of requiredFields) {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "canadian-spray-foam-quote",
          "bot-field": "",
          businessName: formData.businessName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          province: formData.province,
          postalCode: formData.postalCode,
          yearsInBusiness: formData.yearsInBusiness,
          numberOfEmployees: formData.numberOfEmployees,
          annualRevenue: formData.annualRevenue,
          typeOfWork: formData.typeOfWork.join(", "),
          coverageNeeded: formData.coverageNeeded.join(", "),
          currentCarrier: formData.currentCarrier,
          renewalDate: formData.renewalDate,
          additionalNotes: formData.additionalNotes,
          pipedaConsent: formData.pipedaConsent ? "yes" : "no",
        }).toString(),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      // Fire-and-forget webhook
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          typeOfWork: formData.typeOfWork.join(", "),
          coverageNeeded: formData.coverageNeeded.join(", "),
          pipedaConsent: formData.pipedaConsent ? "yes" : "no",
        }),
      }).catch(() => {});

      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! We have received your quote request. Our team will contact you within 24 hours with your customised coverage options."
      );
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Sorry, there was an error submitting your request. Please try again or call us at 1-888-SPF-QUOTE."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---- Render ----

  return (
    <section id="quote" className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Get Your Free Quote</h2>
        <p className="text-[#9ca3af] text-center mb-8">
          Tell us about your spray foam business and we will get back to you within hours.
        </p>

        {/* Success state */}
        {submitStatus === "success" ? (
          <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-8 flex flex-col items-center gap-4 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#e5e7eb] text-lg">{submitMessage}</p>
          </div>
        ) : (
          <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 md:p-8">
            {/* Error banner */}
            {submitStatus === "error" && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
                  <path
                    d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    stroke="#f87171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-red-400 text-sm">{submitMessage}</p>
              </div>
            )}

            <form
              name="canadian-spray-foam-quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="canadian-spray-foam-quote" />
              <div style={{ display: "none" }}>
                <label>
                  Do not fill this out:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {/* ── Section 1: Business Information ── */}
              <SectionHeading>Business Information</SectionHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Name — spans 2 cols */}
                <div className="md:col-span-2">
                  <Label htmlFor="field-businessName" required>Business Name</Label>
                  <input
                    id="field-businessName"
                    name="businessName"
                    type="text"
                    placeholder="Your company name"
                    required
                    autoComplete="organization"
                    value={formData.businessName}
                    onChange={(e) => handleTextChange("businessName", e.target.value)}
                    onBlur={() => handleBlur("businessName")}
                    className={errors.businessName ? inputError : inputNormal}
                  />
                  <FieldError message={errors.businessName} />
                </div>

                {/* First Name */}
                <div>
                  <Label htmlFor="field-firstName" required>First Name</Label>
                  <input
                    id="field-firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={(e) => handleTextChange("firstName", e.target.value)}
                    onBlur={() => handleBlur("firstName")}
                    className={errors.firstName ? inputError : inputNormal}
                  />
                  <FieldError message={errors.firstName} />
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="field-lastName" required>Last Name</Label>
                  <input
                    id="field-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    required
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={(e) => handleTextChange("lastName", e.target.value)}
                    onBlur={() => handleBlur("lastName")}
                    className={errors.lastName ? inputError : inputNormal}
                  />
                  <FieldError message={errors.lastName} />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="field-email" required>Email Address</Label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    placeholder="john@company.ca"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => handleTextChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={errors.email ? inputError : inputNormal}
                  />
                  <FieldError message={errors.email} />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="field-phone" required>Phone Number</Label>
                  <input
                    id="field-phone"
                    name="phone"
                    type="tel"
                    placeholder="(416) 555-0100"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => handleTextChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    className={errors.phone ? inputError : inputNormal}
                  />
                  <FieldError message={errors.phone} />
                </div>

                {/* Province */}
                <div>
                  <Label htmlFor="field-province" required>Province / Territory</Label>
                  <div className="relative">
                    <select
                      id="field-province"
                      name="province"
                      required
                      value={formData.province}
                      onChange={(e) => handleSelectChange("province", e.target.value)}
                      onBlur={() => handleBlur("province")}
                      className={`appearance-none pr-10 ${errors.province ? inputError : inputNormal}`}
                    >
                      <option value="">Select province…</option>
                      {PROVINCES.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                    <ChevronIcon />
                  </div>
                  <FieldError message={errors.province} />
                </div>

                {/* Postal Code */}
                <div>
                  <Label htmlFor="field-postalCode" required>Postal Code</Label>
                  <input
                    id="field-postalCode"
                    name="postalCode"
                    type="text"
                    placeholder="M5V 1A1"
                    required
                    autoComplete="postal-code"
                    value={formData.postalCode}
                    onChange={(e) => handleTextChange("postalCode", e.target.value.toUpperCase())}
                    onBlur={() => handleBlur("postalCode")}
                    className={errors.postalCode ? inputError : inputNormal}
                  />
                  <FieldError message={errors.postalCode} />
                </div>

                {/* Years in Business */}
                <div>
                  <Label htmlFor="field-yearsInBusiness" required>Years in Business</Label>
                  <div className="relative">
                    <select
                      id="field-yearsInBusiness"
                      name="yearsInBusiness"
                      required
                      value={formData.yearsInBusiness}
                      onChange={(e) => handleSelectChange("yearsInBusiness", e.target.value)}
                      onBlur={() => handleBlur("yearsInBusiness")}
                      className={`appearance-none pr-10 ${errors.yearsInBusiness ? inputError : inputNormal}`}
                    >
                      <option value="">Select…</option>
                      {YEARS_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronIcon />
                  </div>
                  <FieldError message={errors.yearsInBusiness} />
                </div>

                {/* Number of Employees */}
                <div>
                  <Label htmlFor="field-numberOfEmployees" required>Number of Employees</Label>
                  <div className="relative">
                    <select
                      id="field-numberOfEmployees"
                      name="numberOfEmployees"
                      required
                      value={formData.numberOfEmployees}
                      onChange={(e) => handleSelectChange("numberOfEmployees", e.target.value)}
                      onBlur={() => handleBlur("numberOfEmployees")}
                      className={`appearance-none pr-10 ${errors.numberOfEmployees ? inputError : inputNormal}`}
                    >
                      <option value="">Select…</option>
                      {EMPLOYEES_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronIcon />
                  </div>
                  <FieldError message={errors.numberOfEmployees} />
                </div>

                {/* Annual Revenue — spans 2 cols */}
                <div className="md:col-span-2">
                  <Label htmlFor="field-annualRevenue" required>Annual Revenue (CAD)</Label>
                  <div className="relative">
                    <select
                      id="field-annualRevenue"
                      name="annualRevenue"
                      required
                      value={formData.annualRevenue}
                      onChange={(e) => handleSelectChange("annualRevenue", e.target.value)}
                      onBlur={() => handleBlur("annualRevenue")}
                      className={`appearance-none pr-10 ${errors.annualRevenue ? inputError : inputNormal}`}
                    >
                      <option value="">Select revenue range…</option>
                      {REVENUE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronIcon />
                  </div>
                  <FieldError message={errors.annualRevenue} />
                </div>
              </div>

              <SectionDivider />

              {/* ── Section 2: Work and Coverage ── */}
              <SectionHeading>Work and Coverage</SectionHeading>

              {/* Type of Work */}
              <div className="mb-6" id="field-typeOfWork">
                <Label htmlFor="field-typeOfWork" required>Type of Work</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {WORK_TYPES.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="typeOfWork"
                        value={option}
                        checked={formData.typeOfWork.includes(option)}
                        onChange={(e) => handleCheckboxGroup("typeOfWork", option, e.target.checked)}
                        className="w-4 h-4 rounded border-[#1f2937] bg-[#0a0e1a] accent-[#f59e0b] cursor-pointer"
                      />
                      <span className="text-sm text-[#e5e7eb] group-hover:text-white transition-colors">{option}</span>
                    </label>
                  ))}
                </div>
                <FieldError message={errors.typeOfWork} />
              </div>

              {/* Coverage Needed */}
              <div className="mb-6" id="field-coverageNeeded">
                <Label htmlFor="field-coverageNeeded" required>Coverage Needed</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {COVERAGE_TYPES.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="coverageNeeded"
                        value={option}
                        checked={formData.coverageNeeded.includes(option)}
                        onChange={(e) => handleCheckboxGroup("coverageNeeded", option, e.target.checked)}
                        className="w-4 h-4 rounded border-[#1f2937] bg-[#0a0e1a] accent-[#f59e0b] cursor-pointer"
                      />
                      <span className="text-sm text-[#e5e7eb] group-hover:text-white transition-colors">{option}</span>
                    </label>
                  ))}
                </div>
                <FieldError message={errors.coverageNeeded} />
              </div>

              {/* Current Carrier */}
              <div className="mb-6">
                <Label htmlFor="field-currentCarrier">Current Insurance Carrier</Label>
                <input
                  id="field-currentCarrier"
                  name="currentCarrier"
                  type="text"
                  placeholder="Current carrier name (if any)"
                  value={formData.currentCarrier}
                  onChange={(e) => handleTextChange("currentCarrier", e.target.value)}
                  className={inputNormal}
                />
              </div>

              {/* Renewal Date */}
              <div className="mb-6">
                <Label htmlFor="field-renewalDate">Policy Renewal Date</Label>
                <input
                  id="field-renewalDate"
                  name="renewalDate"
                  type="date"
                  value={formData.renewalDate}
                  onChange={(e) => handleTextChange("renewalDate", e.target.value)}
                  className={inputNormal}
                />
              </div>

              {/* Additional Notes */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <Label htmlFor="field-additionalNotes">Additional Notes</Label>
                  <span className="text-xs text-[#9ca3af]">
                    {formData.additionalNotes.length}/1000
                  </span>
                </div>
                <textarea
                  id="field-additionalNotes"
                  name="additionalNotes"
                  placeholder="Any additional details about your business or coverage needs…"
                  rows={4}
                  maxLength={1000}
                  value={formData.additionalNotes}
                  onChange={(e) => handleTextChange("additionalNotes", e.target.value)}
                  className={`${inputNormal} resize-y`}
                />
              </div>

              <SectionDivider />

              {/* ── Section 3: Consent ── */}
              <SectionHeading>Consent</SectionHeading>

              <div className="mb-8" id="field-pipedaConsent">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="pipedaConsent"
                    checked={formData.pipedaConsent}
                    onChange={(e) => handleConsent(e.target.checked)}
                    className="w-4 h-4 mt-0.5 shrink-0 rounded border-[#1f2937] bg-[#0a0e1a] accent-[#f59e0b] cursor-pointer"
                  />
                  <span className="text-sm text-[#9ca3af] leading-relaxed">
                    I consent to the collection, use, and disclosure of my personal information in
                    accordance with the Privacy Policy and Canada&apos;s Personal Information Protection
                    and Electronic Documents Act (PIPEDA). I understand my information will be used
                    to provide insurance quotes and may be shared with licensed insurance partners.
                    <span className="text-[#f59e0b] ml-0.5">*</span>
                  </span>
                </label>
                <FieldError message={errors.pipedaConsent} />
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[200px] bg-[#f59e0b] hover:bg-[#d97706] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                        <path
                          d="M12 2a10 10 0 0110 10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

// Shared chevron for selects
function ChevronIcon() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6L8 10L12 6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
