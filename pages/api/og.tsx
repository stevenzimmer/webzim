/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const sfPro = fetch(
  new URL("/styles/SF-Pro-Display-Medium.otf", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function GET() {
  const [sfProData] = await Promise.all([sfPro]);

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex items-center justify-center bg-[#0b1120]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8% 12%, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0) 55%), radial-gradient(circle at 92% 18%, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 50%), radial-gradient(circle at 88% 88%, rgba(129,140,248,0.2) 0%, rgba(129,140,248,0) 50%)",
        }}
      >
        <div tw="w-full h-full flex flex-row items-center justify-between bg-[#0f172a] border border-[#1f2937] shadow-2xl px-12">
          <div tw="flex flex-col w-7/12">
            <div
              tw="flex items-center "
              style={{
                fontFamily: "SF Pro",
              }}
            >
              <span tw="px-5 py-2 rounded-full border border-[#1e293b] bg-[#0b1120] font-semibold uppercase text-[#cbd5f5] text-xl tracking-widest">
                Full Stack Engineer
              </span>
            </div>
            <h1
              tw="text-[#e2e8f0] font-bold mt-3 text-[80px]"
              style={{
                fontFamily: "SF Pro",
              }}
            >
              Steven{" "}
              <span tw="text-[#7dd3fc]" style={{ fontFamily: "SF Pro" }}>
                Zimmer
              </span>
            </h1>
            <p
              tw="text-[#cbd5e1] text-2xl"
              style={{
                fontFamily: "SF Pro",
              }}
            >
              Full stack engineer specializing in modern web platforms, AI
              tooling and model integration, and growth engineering.
            </p>
            <div tw="mt-5 flex flex-wrap text-[#d1d5db]">
              {[
                [
                  "#38bdf8",
                  "Modern product stacks with Next.js, React, and TypeScript",
                ],
                ["#22d3ee", "Growth engineering and technical SEO execution"],
                ["#34d399", "CMS platforms: Sanity, Contentful, and HubSpot"],
                ["#818cf8", "AI toolchains and model integrations"],
              ].map(([color, text]) => (
                <div
                  key={text}
                  tw="flex items-start w-1/2"
                  style={{ fontFamily: "SF Pro" }}
                >
                  <span
                    tw="mt-2 h-3 w-3 rounded-full text-3xl mr-4"
                    style={{ backgroundColor: color }}
                  />
                  <span tw="text-lg">{text}</span>
                </div>
              ))}
            </div>
            <div
              tw="mt-6 flex items-center"
              style={{ fontFamily: "SF Pro", fontSize: 20 }}
            >
              <span tw="px-6 py-3 rounded-full bg-[#0b172a] border border-[#1f2937] font-semibold text-[#7dd3fc]">
                stevenzimmer40@gmail.com
              </span>
            </div>
          </div>

          <div tw="flex flex-col items-center w-5/12 px-18">
            <div
              tw="flex flex-col border border-[#1f2937] bg-[#0b1120] p-4"
              style={{ borderRadius: 28 }}
            >
              <img
                tw="rounded-xl w-full"
                src={`https://github.com/stevenzimmer.png`}
                alt="Steven Zimmer headshot"
              />
            </div>
            <div tw=" flex flex-col w-full">
              <p
                tw="font-semibold uppercase text-[#94a3b8]"
                style={{
                  fontFamily: "SF Pro",
                  fontSize: 16,
                  letterSpacing: "0.3em",
                }}
              >
                Focus Areas
              </p>
              <div tw=" flex flex-wrap">
                {[
                  "Performance engineering",
                  "Growth systems",
                  "CMS architecture",
                  "AI product prototyping",
                ].map((item) => (
                  <div
                    key={item}
                    tw="border border-[#1f2937] bg-[#0b1120] p-3 font-semibold text-[#e2e8f0] w-1/2 text-xl rounded-xl"
                    style={{
                      fontFamily: "SF Pro",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfProData,
        },
      ],
    },
  );
}
