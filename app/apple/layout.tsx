import React from "react";
import Navbar from "@/components/apple/Navbar";
import Hero from "@/components/apple/Hero";
import Highlights from "@/components/apple/Highlights";
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
