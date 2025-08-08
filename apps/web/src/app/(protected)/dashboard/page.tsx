import { auth } from "@/lib/auth";
import CheckoutSessionForm from "@/components/forms/billing/checkout-session.form";
import LoginWithGithubForm from "@/components/forms/authentication/login-with-github.form";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <main>
      <section>
        <h1>Dashboard</h1>

        <CheckoutSessionForm
          text={"Purchase Subscription"}
          priceId={"price_1Pork5BPkmIjU4TJidywH5kc"}
          userId={session.user.id!}
          email={session.user.email!}
          isSubscription={true}
        />
      </section>
      <section>
        <LoginWithGithubForm />
      </section>
    </main>
  );
}
