import Marquee from "react-fast-marquee";
import { features } from "@/lib/data";
import { slate } from "tailwindcss/colors";
export default function LogosSlider() {
  return (
    <Marquee
      className="h-full border-y border-slate-800/70 bg-slate-950/70 py-6"
      direction="left"
      gradient={true}
      gradientColor={slate[950]}
    >
      {features
        .filter((feature) => {
          return feature.demo;
        })
        .map((props, i: number) => (
          <div className="mx-6 !max-w-[150px] md:mx-12" key={i}>
            {props.demo && (
              <div className="w-full bg-transparent grayscale opacity-80 transition duration-300 hover:opacity-100">
                {props.demo}
              </div>
            )}
          </div>
        ))}
    </Marquee>
  );
}
