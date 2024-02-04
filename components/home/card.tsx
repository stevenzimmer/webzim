import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import Image from "next/image";
import { sub } from "date-fns";

export default function Card({
  title,
  description,
  demo,
  large,
  href,
  bullets,
  logo,
  subtitle
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
  href?: string;
  bullets?: string[];
  logo?: string;
  subtitle?: string;
}) {

 
  return (
    <div
      className={`relative col-span-1 overflow-hidden rounded-xl border bg-slate-700 border-slate-700 shadow-md ${
        large ? "md:col-span-2" : ""
      } ${
        href ? "hover:-translate-y-0.5 transition-transform duration-200 hover:border-blue-300" : ""
      }`} 
    >
      {href && (
        <>
      
          <Link href={`${href}`} target="_blank" className="w-full h-full inset-0 absolute z-10"></Link>
        
        </>
      )}
    
          <div className="relative w-full overflow-hidden bg-teal-400/50 ">
          {logo ? (
            <Image src={logo} alt={`${title} logo`} className="grayscale mx-auto " width={200} height={200} />
            ) : (
            <div className="flex h-[113px] items-center justify-center ">{demo}</div>
            )}
          </div>
       
          
   
      <div className="p-6">
        {title && (
          <h3 className={`bg-gradient-to-br from-white to-slate-50 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal text-center mb-3`}>
          <Balancer>{title}</Balancer>
        </h3>
        )}
        
     
        <div className="prose-md leading-normal text-white md:prose max-w-full px-6 pb-6">
          {bullets ? (
              <ul className="list-disc text-left text-white ">
                {bullets.map((bullet, i) => (
                  <li className="mb-2" key={i}>{bullet}</li>
                ))}
              </ul>
            ) : (
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-white"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
             )}
          
         
        </div>
      </div>
    </div>
  );
}
