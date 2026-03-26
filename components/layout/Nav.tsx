import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="container px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              SZ
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-semibold text-slate-100">
                Steven Zimmer
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Web Dev Zim
              </span>
            </span>
          </Link>
          <nav aria-label="Primary" className="w-full md:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "rounded-full px-3 py-1.5 transition hover:text-white",
                      label === "Contact" &&
                        "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500",
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
