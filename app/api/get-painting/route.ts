import type { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";

type ResponseData = {
  data: string;
};

export async function POST(
  req: NextRequest,
  _res: NextApiResponse<ResponseData>,
) {
  const { prompt } = await req.json();

  if (typeof prompt === "string") {
    try {
      const openai = getOpenAIClient();
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      });
      const image = response.data?.[0];

      if (!image?.url) {
        return NextResponse.json(
          {
            error: "OpenAI did not return an image URL",
          },
          {
            status: 502,
          },
        );
      }

      return NextResponse.json(
        {
          aiPrompt: image.revised_prompt,
          img: image.url,
        },
        {
          status: 200,
        },
      );
    } catch (error) {
      return NextResponse.json(
        {
          error:
            error instanceof Error ? error.message : "OpenAI request failed",
        },
        {
          status: 500,
        },
      );
    }
  } else {
    return NextResponse.json(
      {
        text: "Input provided is not allowed",
      },
      {
        status: 500,
      },
    );
  }
}

// // console.log(process.env.OPEN_AI_KEY);

// export default async function handler(req, res) {

//   console.log(req.body.prompt);

//   if( typeof req.body.prompt === "string") {
//     const response = await openai.createImage({
//       prompt: req.body.prompt,
//       n:1,
//       size: "1024x1024"
//     });

//     console.log(response.data);

//     res.status(200).json({ payload: response.data, img: response.data.data[0].url });
//   } else {
//     res.status(200).json({ text: "Input provided is not allowed" });
//   }
// }
