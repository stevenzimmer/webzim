/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const runtime = 'edge';

const sfPro = fetch(
  new URL("/styles/SF-Pro-Display-Medium.otf", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function GET() {

  const [sfProData] = await Promise.all([sfPro]);

  return new ImageResponse(
    (

      <div
      tw="w-full h-full flex flex-col items-center justify-center bg-white"
  style={{
    backgroundImage:
      "linear-gradient(to bottom right, #eff6ff 25%, #ffffff 50%, #dbeafe 75%)",
  }}
>
    <img tw="rounded-full w-[200px] h-[200px] border-8 border-black/80" src={`https://github.com/stevenzimmer.png`} alt="Steven Zimmer Headshot" />
    
    <h1
      tw="text-7xl text-transparent font-bold"
      style={{
        fontFamily: "SF Pro",
        background:
          "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
        backgroundClip: "text",
        lineHeight: "3.5rem",
      }}
    >
     Steven Zimmer
    </h1>
    
    <h2 
    tw="text-4xl text-transparent font-bold"
    style={{
      fontFamily: "SF Pro",
      background:
        "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
      backgroundClip: "text",
      color: "transparent",
      lineHeight: "3rem",
    }}>
      Full Stack Web Developer | Web Strategy | Growth Marketing
    </h2>
  
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