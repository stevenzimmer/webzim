import { buttons } from "@/lib/data";

const d = new Date();

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 py-3 text-black">
      <div className="container px-6">
        <div className="flex flex-row-reverse flex-wrap items-center justify-around">
          <div className="xs:mb-0 flex  items-center">
            {buttons.map(({ link, icon }, i) => (
              <a
                key={i}
                className="mx-2 text-slate-100"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <p className="py-3 text-center text-slate-100 md:text-right">
              {d.getFullYear()} &nbsp;{" "}
              <span className="font-code">Web Dev Zim LLC</span> &nbsp; | &nbsp;
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
