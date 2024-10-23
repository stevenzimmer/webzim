import Marquee from "react-fast-marquee";
import { features } from "@/lib/data";
import { slate } from "tailwindcss/colors";
export default function LogosSlider() {
  return (
    <Marquee
      className="h-full bg-slate-900 py-6"
      direction="left"
      gradient={true}
      gradientColor={slate[900]}
    >
      {features
        .filter((feature) => {
          return feature.demo;
        })
        .map((props, i: number) => (
          <div className="mx-6 !max-w-[150px] md:mx-12" key={i}>
            {props.demo && (
              <div className="w-full bg-transparent grayscale">
                {props.demo}
              </div>
            )}
          </div>
        ))}
    </Marquee>
  );
}
