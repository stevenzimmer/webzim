export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="container px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="group inline-flex items-center gap-3">
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
          </a>
          <nav aria-label="Primary" className="w-full md:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
              <li>
                <a
                  href="/#work"
                  className="rounded-full px-3 py-1.5 transition hover:text-white"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="rounded-full px-3 py-1.5 transition hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  className="rounded-full px-3 py-1.5 transition hover:text-white"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#certifications"
                  className="rounded-full px-3 py-1.5 transition hover:text-white"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-slate-100 transition hover:border-slate-500 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
