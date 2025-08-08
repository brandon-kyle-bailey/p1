"use client";

import { toast } from "sonner";

import {
  CheckoutSessionClientAction,
  CheckoutSessionClientActionProps,
} from "@/actions/billing/client/checkout-session.action";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export interface CheckoutSessionFormProps
  extends CheckoutSessionClientActionProps {
  text: string;
}

export default function CheckoutSessionForm(props: CheckoutSessionFormProps) {
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await CheckoutSessionClientAction({
      priceId: props.priceId,
      userId: props.userId,
      email: props.email,
      isSubscription: props.isSubscription,
    });
    if (result.url) {
      router.push(result.url);
    } else {
      toast.error("Checkout failed.");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Button type="submit">{props.text}</Button>
    </form>
  );
}
