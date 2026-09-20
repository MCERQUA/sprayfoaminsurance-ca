import { InputHTMLAttributes } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export function Field({ label, name, error, required, className = "", ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm text-[var(--color-muted)]">
        {label}
        {required && <span className="text-[var(--color-amber)] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className={`w-full bg-[var(--color-bg-elev)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-text)] placeholder:text-[var(--color-muted)]/50 focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] outline-none transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
}
