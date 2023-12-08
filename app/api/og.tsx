/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const sfPro = fetch(
  new URL("../../styles/SF-Pro-Display-Medium.otf", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const [sfProData] = await Promise.all([sfPro]);

  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "Steven Zimmer";

  return new ImageResponse(
    (
      <div
  style={{
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(to bottom right, #eff6ff 25%, #ffffff 50%, #dbeafe 75%)",
  }}
>

    <h1
      style={{
        fontSize: "80px",
        fontFamily: "SF Pro",
        background:
          "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
        backgroundClip: "text",
        color: "transparent",
        lineHeight: "5rem",
      }}
    >
      Steven Zimmer
    </h1>
    
    <h2 style={{
      fontSize: "30px",
      fontFamily: "SF Pro",
      background:
        "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
      backgroundClip: "text",
      color: "transparent",
      lineHeight: "3rem",
    }}>
      Full Stack | Web Strategy | Growth Marketing
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
