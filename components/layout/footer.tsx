import { buttons } from "@/lib/data";

const d = new Date();

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/70 bg-slate-950/80 py-10">
      <div className="container px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-400">
              {d.getFullYear()}
              {"  "}
              <span className="font-code text-slate-200">Web Dev Zim LLC</span>.
              All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {buttons.map(({ link, icon, title }, i) => (
              <a
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-100 transition hover:border-slate-500 hover:text-white"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
