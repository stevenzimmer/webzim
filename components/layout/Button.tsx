import React from "react";

type ButtonProps = {
  className?: string;
  href: string;
  children: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  className,
  href,
  children,
  icon,
  variant = "secondary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none";
  const styles = {
    primary:
      "border-sky-400/60 bg-gradient-to-r from-sky-500/90 to-cyan-400/90 text-slate-950 shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 hover:shadow-sky-500/30",
    secondary:
      "border-slate-700 bg-slate-900/70 text-slate-100 hover:-translate-y-0.5 hover:border-slate-500 hover:text-white",
    ghost:
      "border-transparent bg-transparent text-slate-200 hover:-translate-y-0.5 hover:text-white",
  }[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className ?? ""}`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
