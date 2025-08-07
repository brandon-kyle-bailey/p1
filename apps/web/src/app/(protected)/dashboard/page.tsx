import { ModeToggle } from "@/components/custom/mode-toggle";
import CheckoutButton from "@/components/custom/payments/checkout-button";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div>
      <h1>Dashboard</h1>
      <ModeToggle />
      <CheckoutButton
        priceId="price_1Pork5BPkmIjU4TJidywH5kc"
        userId={session.user.id}
        email={session.user.email!}
        isSubscription={true}
      />
    </div>
  );
}
