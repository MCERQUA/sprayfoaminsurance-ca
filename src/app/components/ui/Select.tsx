import { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: SelectOption[];
  error?: string;
}

export function Select({ label, name, options, error, required, className = "", ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm text-[var(--color-muted)]">
        {label}
        {required && <span className="text-[var(--color-amber)] ml-0.5">*</span>}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          className={`w-full appearance-none bg-[var(--color-bg-elev)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] outline-none transition-colors pr-10 ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[var(--color-muted)]"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
}
