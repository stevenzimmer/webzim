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
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NDIvzCZaWAyW0RIE7Sw9H0w",
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/stripe/success",
      cancel_url: "http://localhost:3000/stripe/cancel",
    });

    return NextResponse.json(
      {
        session,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    // console.log({error});
    return NextResponse.json(
      {
        message: error.message || "Error",
      },
      {
        status: 500,
      },
    );
  }
}
