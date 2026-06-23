import type { Metadata } from "next";
import { Sora, Space_Grotesk, Source_Code_Pro } from "next/font/google";
import "@/styles/globals.css";
import { DOMAIN } from "@/lib/constants";
import Footer from "@/components/layout/footer";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  alternates: {
    canonical: "/",
  },
  title: "Steven Zimmer - Full Stack Engineer for AI, CMS, and SEO",
  description:
    "Steven Zimmer builds fast web products, AI-enabled workflows, CMS platforms, and technical SEO systems with React, Next.js, TypeScript, Sanity, Contentful, HubSpot, and WordPress.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
  },
  keywords: [
    "Steven Zimmer",
    "Full Stack Engineer",
    "AI Integrations",
    "Next.js",
    "React",
    "TypeScript",
    "Sanity CMS",
    "HubSpot CMS",
    "Contentful",
    "WordPress",
    "Technical SEO",
    "Growth Engineering",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 630,
        alt: "Steven Zimmer | Full Stack Engineer for AI, CMS, and SEO",
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
  url: `${DOMAIN}/`,
  image: `${DOMAIN}/api/og`,
  sameAs: [
    "https://github.com/stevenzimmer",
    "https://www.linkedin.com/in/webdevzim/",
    "https://twitter.com/webdevzim",
  ],
  jobTitle: "Full Stack Engineer",
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
    "AI Integrations",
    "Technical SEO",
    "Growth Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Sanity CMS",
    "Contentful",
    "HubSpot CMS",
    "WordPress",
    "Node.js",
  ],
  description:
    "Steven Zimmer is a full stack engineer who builds fast web products, AI-enabled workflows, CMS platforms, and technical SEO systems for product, marketing, and go-to-market teams.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Work",
    email: "mailto:stevenzimmer40@gmail.com",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Engineer",
    skills: [
      "Full Stack Web Development",
      "AI Integrations",
      "Technical SEO",
      "Growth Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "Sanity CMS",
      "Contentful",
      "HubSpot CMS",
      "WordPress",
      "Node.js",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${spaceGrotesk.variable} ${sourceCodePro.variable}`}
    >
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
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
