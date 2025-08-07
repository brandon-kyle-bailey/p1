"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface CheckoutButtonProps {
  priceId: string;
  userId: string;
  email: string;
  isSubscription: boolean;
}

export default function CheckoutButton({
  priceId,
  userId,
  email,
  isSubscription = true,
}: CheckoutButtonProps) {
  const router = useRouter();

  const handleCheckout = async () => {
    const res = await fetch("/api/payments/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId,
        userId,
        email,
        isSubscription,
      }),
    });

    const data = await res.json();
    if (data.url) {
      router.push(data.url);
    } else {
      alert("Checkout failed.");
    }
  };

  return <Button onClick={handleCheckout}>Purchase subscription</Button>;
}
