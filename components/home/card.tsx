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
}: DictItem) {
  return (
    <div
      className={`relative col-span-1 overflow-hidden rounded-xl border-2 border-transparent bg-slate-700 shadow-md hover:bg-slate-800  ${
        large ? "md:col-span-2" : ""
      } ${
        href
          ? "transition-transform duration-200 hover:-translate-y-0.5 hover:border-teal-300/50"
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
      <div className="relative h-[113px] w-full overflow-hidden bg-teal-200/50 ">
        {logo ? (
          <Image
            src={logo}
            alt={`${title} logo`}
            className="mx-auto bg-transparent   grayscale"
            width={200}
            height={200}
          />
        ) : (
          <div className="flex  h-full items-center justify-center ">
            <div className="flex w-48 justify-center">{demo}</div>
          </div>
        )}
      </div>

      <div className="px-6 pb-3 pt-6 md:px-0 lg:px-6">
        {title && (
          <h3
            className={`font-display mb-3 bg-gradient-to-br from-white to-slate-50 bg-clip-text text-center text-xl font-bold text-transparent md:text-2xl md:font-normal`}
          >
            <Balancer>{title}</Balancer>
          </h3>
        )}

        <div className="prose-md max-w-full px-6 pb-3 leading-normal text-white md:prose md:px-0 lg:px-6">
          {bullets && (
            <ul className="list-disc text-left text-white ">
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
                className="m-1 w-auto rounded border border-teal-600 bg-teal-600 px-1 py-1 shadow md:px-3"
              >
                <motion.p
                  className="font-display bg-gradient-to-br from-white to-slate-50 bg-clip-text text-sm font-bold text-transparent drop-shadow-sm "
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
