"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";

export default function Loader() {
  const { isLoading } = useContext(ZimGPTContext);
  return (
    <>
      {isLoading && (
        <div className="text-lg text-slate-50">
          Waiting for chat response...
        </div>
      )}
    </>
  );
}
