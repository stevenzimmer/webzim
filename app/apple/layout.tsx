import type { Metadata } from "next";
import Navbar from "@/components/apple/Navbar";
import Hero from "@/components/apple/Hero";
import Highlights from "@/components/apple/Highlights";
export const metadata: Metadata = {
  alternates: {
    canonical: "/apple",
  },
  robots: {
    index: false,
    follow: true,
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      {children}
    </>
  );
}
