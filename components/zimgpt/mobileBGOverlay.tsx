"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";

export default function MobileBGOverlay() {
  const { mobileOpen, toggleMenu } = useContext(ZimGPTContext);
  return (
    <>
      {mobileOpen && (
        <div
          className="absolute inset-0 z-0 h-full w-full bg-black/80 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
