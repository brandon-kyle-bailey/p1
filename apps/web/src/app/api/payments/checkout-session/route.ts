import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { priceId, userId, email, isSubscription } = await req.json();

    const headers = req.headers;
    const referer = headers.get("referer");

    const redirectUrl = referer || `${process.env.NEXT_PUBLIC_APP_URL}/`;

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId,
        email: email,
      },
      success_url: redirectUrl,
      cancel_url: redirectUrl,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
