import type { Metadata } from "next";
import "@/styles/globals.css";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { DOMAIN } from "@/lib/constants";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: "Steven Zimmer | Full Stack Web Developer",
  description:
    "Full stack problem solver specializing in web technologies, growth marketing, e-commerce, and CMS platforms.",
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
  alternates: {
    canonical: DOMAIN,
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
      <body className="dark:bg-black/80">
        <RWBProvider>
          <main>{children}</main>
          <Footer />
        </RWBProvider>
      </body>
    </html>
  );
}
