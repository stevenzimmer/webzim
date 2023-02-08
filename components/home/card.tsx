import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export default function Card({
  title,
  description,
  demo,
  large,
  href
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
  href?: string;
}) {
  return (
    <div
      className={`relative col-span-1 overflow-hidden rounded-xl border bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      } ${
        href ? "hover:-translate-y-0.5 transition-transform duration-200 hover:border-blue-300" : ""
      }`} 
    >
      {href && (
        <Link target={"_blank"} href={`${href}`} className="w-full h-full inset-0 absolute"></Link>
      )}
      <div className="flex h-48 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm leading-normal text-gray-500 md:prose">
          <Balancer>
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
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
      </div>
    </div>
  );
}
