import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/providers/stripe";
import { StripeWebhookEvents } from "@/lib/constants";

export const config = {
  api: {
    bodyParser: false,
  },
};

type StripeWebhookHandler = (event: Stripe.Event) => Promise<void> | void;

const stripeWebhookHandlers = new Map<
  StripeWebhookEvents,
  StripeWebhookHandler
>([
  [
    StripeWebhookEvents.PaymentMethodAttached,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.CustomerCreated,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.CustomerUpdated,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.CustomerSubscriptionCreated,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.CheckoutSessionCompleted,
    async (event) => {
      console.log(event);
      const session = event.data.object;
      console.log("Payment successful", session);
    },
  ],
  [
    StripeWebhookEvents.SetupIntentCreated,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.SetupIntentSuccesseded,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.InvoiceCreated,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.InvoiceFinalized,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.InvoicePaid,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.InvoicePaymentFailed,
    async (event) => {
      console.log(event);
    },
  ],
  [
    StripeWebhookEvents.InvoicePaymentSucceeded,
    async (event) => {
      console.log(event);
    },
  ],
]);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event: Stripe.Event;
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

  const eventType = event.type as StripeWebhookEvents;

  if (stripeWebhookHandlers.has(eventType)) {
    await stripeWebhookHandlers.get(eventType)!(event);
  } else {
    console.warn(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
