import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer";
  const variants = {
    primary: "bg-[var(--color-amber)] text-black hover:bg-[var(--color-amber-600)]",
    ghost:   "border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-elev)]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
