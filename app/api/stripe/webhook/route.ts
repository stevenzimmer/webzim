import { NextRequest, NextResponse } from "next/server";
import type { NextApiResponse } from "next";
import Stripe from "stripe";

// import OpenAI from "openai";
// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI_KEY,
// });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

type ResponseData = {
  data: string;
};

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>,
) {
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature");
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Error",
      },
      {
        status: 400,
      },
    );
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    return NextResponse.json(
      {
        session: {
          success: true,
          msg: "Checkout session completed",
        },
      },
      {
        status: 200,
      },
    );
  }
}
