import Link from "next/link";
import { WebRoutes } from "@/lib/constants";

export default function DisclaimerComponent() {
  return (
    <p className="text-sm text-muted-foreground">
      By continuing, you agree to our{" "}
      <Link
        href={WebRoutes.Tos}
        className="underline text-muted-foreground hover:text-primary"
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link
        href={WebRoutes.PrivacyPolicy}
        className="underline text-muted-foreground hover:text-primary"
      >
        Privacy Policy
      </Link>
      .
    </p>
  );
}
