import { NextRequest, NextResponse } from "next/server";
import type { NextApiResponse } from "next";
import { getOpenAIClient } from "@/lib/openai";

type ResponseData = {
  data: string;
};

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { prompt } = await req.json();

  try {
    const openai = getOpenAIClient();
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      stream: false,
    });

    return NextResponse.json(
      {
        completion,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "OpenAI request failed",
      },
      {
        status: 500,
      },
    );
  }
}
