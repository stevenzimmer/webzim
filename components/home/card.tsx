import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import type { DictItem } from "@/lib/types";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { title } from "process";
export default function Card({
  title,
  demo,
  large,
  href,
  bullets,
  logo,
  nofollow,
  tech,
  sameTab
}: DictItem) {

 
  return (
    <div
      className={`relative col-span-1 overflow-hidden rounded-xl border-2 bg-slate-700 border-transparent shadow-md ${
        large ? "md:col-span-2" : ""
      } ${
        href ? "hover:-translate-y-0.5 transition-transform duration-200 hover:border-teal-300/50" : ""
      }`} 
    >
      {href && (
        <>
      
          <Link  rel={`${nofollow ? "nofollow noreferrer" : "noopener"}`} href={`${href}`} target={!sameTab ? "_blank" : "" } className="w-full h-full inset-0 absolute z-10"></Link>
        
        </>
      )}
    
          <div className="relative w-full overflow-hidden bg-teal-200/50 ">
          {logo ? (
            <Image src={logo} alt={`${title} logo`} className="grayscale mx-auto   bg-transparent" width={200} height={200} />
            ) : (
            <div className="flex h-[113px] items-center justify-center ">{demo}</div>
            )}
          </div>
       
          
   
      <div className="px-6 pt-6 pb-3">
        {title && (
          <h3 className={`bg-gradient-to-br from-white to-slate-50 bg-clip-text font-display text-xl font-bold text-transparent md:text-2xl md:font-normal text-center mb-3`}>
          <Balancer>{title}</Balancer>
        </h3>
        )}
        
     
        <div className="prose-md leading-normal text-white md:prose max-w-full px-6 pb-3">
          {bullets && (
              <ul className="list-disc text-left text-white ">
                {bullets.map((bullet, i) => (
                  <li key={i} className="mb-2" >{bullet}</li>
                ))}
              </ul>
            )}
        </div>
      
          
        {tech && (
        <div className="flex flex-wrap justify-center gap-1 "> 
          {tech.map((skill, i) => (
          <motion.div key={i} variants={FADE_DOWN_ANIMATION_VARIANTS}  className="w-auto border border-teal-600 bg-teal-600 rounded px-1 md:px-3 py-1 shadow m-1">
            <motion.p
            className="bg-gradient-to-br from-white to-slate-50 bg-clip-text font-display font-bold text-transparent drop-shadow-sm text-sm "
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            >{skill}</motion.p>
          </motion.div>
            
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
