import LogoutForm from "@/components/custom/forms/logout-form";
import { auth } from "@/lib/auth";

import { ModeToggle } from "@/components/custom/mode-toggle";
import CheckoutButton from "@/components/custom/payments/checkout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div>
      <h1>Dashboard</h1>
      <ModeToggle />
      {session.user.image && (
        <Avatar>
          <AvatarImage src={session.user.image!} />
          <AvatarFallback>User Avatar</AvatarFallback>
        </Avatar>
      )}
      <div>{JSON.stringify(session)}</div>
      <CheckoutButton
        priceId="price_1Pork5BPkmIjU4TJidywH5kc"
        userId={session.user.id}
        email={session.user.email!}
        isSubscription={true}
      />
      <LogoutForm />
    </div>
  );
}
