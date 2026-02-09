import type { Metadata } from "next";
import "@/styles/globals.css";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { DOMAIN } from "@/lib/constants";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: "/",
  },
  title: "Steven Zimmer - Full Stack Engineer & AI Integrations",
  description:
    "Steven Zimmer is a full stack engineer specializing in fast, responsive websites, AI toolchains, and model integrations using modern technologies like Next.js, Sanity CMS, and Contentful. Steven leads technical efforts in go-to-market initiatives and programmatic SEO.",
  keywords: [
    "Steven Zimmer, Full Stack Engineer, AI Integrations, LLMs, Next.js, React, Sanity CMS, Hubspot CMS, Contentful, programmatic SEO, Technical Lead, Web Engineer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 630,
        alt: "Steven Zimmer | Full Stack Web Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steven Zimmer",
  url: "https://webdevzim.com/",
  image: "https://webdevzim.com/api/og",
  sameAs: [
    "https://github.com/stevenzimmer",
    "https://www.linkedin.com/in/webdevzim/",
    "https://twitter.com/webdevzim",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Atlassian",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UC Berkeley",
  },
  knowsAbout: [
    "Web Development",
    "Software Engineering",
    "AI Tooling",
    "LLM Integration",
    "SEO",
    "Next.js",
    "Sanity CMS",
    "Contentful",
    "WordPress",
    "Hubspot",
    "Node.js",
  ],
  description:
    "Steven Zimmer is a full stack engineer specializing in building fast, responsive websites and AI-assisted product experiences using modern technologies like Next.js, Sanity CMS, and Contentful. Steven leads technical efforts in go-to-market initiatives, website redesigns, CMS setups, programmatic SEO, and model integrations.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Work",
    email: "mailto:stevenzimmer40@gmail.com",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Developer",
    skills: [
      "Web Development",
      "AI Integrations",
      "LLM Tooling",
      "Next.js",
      "Sanity CMS",
      "SEO",
      "JavaScript",
      "HTML",
      "CSS",
      "WordPress",
      "Hubspot",
      "Node.js",
    ],
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-slate-100"
        >
          Skip to content
        </a>
        <RWBProvider>
          <main id="content">{children}</main>
          <Footer />
        </RWBProvider>
      </body>
    </html>
  );
}
