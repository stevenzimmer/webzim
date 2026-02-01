import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import type { DictItem } from "@/lib/types";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

export default function Card({
  title,
  demo,
  large,
  href,
  bullets,
  logo,
  nofollow,
  tech,
  sameTab,
  subtitle,
  description,
}: DictItem) {
  return (
    <div
      className={`group relative col-span-1 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 shadow-lg shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-slate-600/70 hover:bg-slate-900/80 ${
        large ? "md:col-span-2" : ""
      } ${
        href
          ? "cursor-pointer"
          : ""
      }`}
    >
      {href && (
        <Link
          rel={`${nofollow ? "nofollow noreferrer" : "noopener"}`}
          href={`${href}`}
          target={!sameTab ? "_blank" : ""}
          className="absolute inset-0 z-10 h-full w-full"
        ></Link>
      )}
      <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden border-b border-slate-800/60 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        {logo ? (
          <Image
            src={logo}
            alt={`${title} logo`}
            className="mx-auto h-16 w-auto bg-transparent grayscale transition duration-300 group-hover:grayscale-0"
            width={200}
            height={200}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex w-48 justify-center text-slate-200">
              {demo}
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sky-500/20 blur-2xl" />
          <div className="absolute -bottom-10 right-0 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
        </div>
      </div>

      <div className="px-6 pb-6 pt-6">
        {title && (
          <h3
            className="mb-2 text-center font-display text-xl font-semibold text-slate-100 md:text-2xl"
          >
            <Balancer>{title}</Balancer>
          </h3>
        )}

        {(subtitle || description) && (
          <p className="mb-4 text-center text-sm text-slate-400">
            {subtitle || description}
          </p>
        )}

        <div className="prose-md max-w-full leading-normal text-slate-200">
          {bullets && (
            <ul className="list-disc text-left text-slate-200">
              {bullets.map((bullet, i) => (
                <li key={i} className="mb-2">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        {tech && (
          <div className="flex flex-wrap justify-center gap-1 ">
            {tech.map((skill, i) => (
              <motion.div
                key={i}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="m-1 w-auto rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 shadow"
              >
                <motion.p
                  className="font-display text-sm font-semibold text-slate-100"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                >
                  {skill}
                </motion.p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
