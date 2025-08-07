import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error(
      "Webhook signature verification failed.",
      JSON.stringify(err),
    );
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "payment_method.attached":
      break;
    case "customer.created":
      break;
    case "customer.updated":
      break;
    case "checkout.session.completed":
      console.log(event);
      const session = event.data.object;
      console.log("Payment successful");
      // TODO: associate sessions result with user in db for customerId storage
      break;
    case "customer.subscription.created":
      break;
    case "setup_intent.created":
      break;
    case "setup_intent.succeeded":
      break;
    case "invoice.created":
      break;
    case "invoice.finalized":
      break;
    case "invoice.paid":
      break;
    case "invoice.payment_failed":
      break;
    case "invoice.payment_succeeded":
      break;
    default:
      console.log(`case "${event.type}`);
  }

  return NextResponse.json({ received: true });
}
