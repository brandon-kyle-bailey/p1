"use client";

import { ApiRoutes } from "../../../lib/constants";

export interface CheckoutSessionClientActionProps {
  priceId: string;
  userId: string;
  email: string;
  isSubscription: boolean;
}

export async function CheckoutSessionClientAction(
  props: CheckoutSessionClientActionProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const res = await fetch(ApiRoutes.BillingCheckoutSession, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      priceId: props.priceId,
      userId: props.userId,
      email: props.email,
      isSubscription: props.isSubscription,
    }),
  });
  return await res.json();
}
