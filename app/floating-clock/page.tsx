import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Clock from "@/components/floating-clock/clock";
export const metadata: Metadata = {
  title: "Floating Clock | Web Dev Zim Project",
  description:
    "A showcase of JavaScript Date object, CSS positioning, and color contrast management.",
};
import Nav from "@/components/layout/Nav";
export default function FloatingClock() {
  return (
    <>
      <Nav />
      <div className="container px-6 py-20">
        <div className="relative ">
          <div className="text-center">
            <Header>Floating Clock</Header>
          </div>
        </div>

        <div className="relative mb-20 mt-12  min-h-[300px] rounded-lg bg-slate-800 shadow-lg md:min-h-[600px] ">
          <Clock />
        </div>
      </div>
    </>
  );
}
