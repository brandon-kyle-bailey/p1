import { signIn } from "@/lib/auth";
import { IconBrandGoogle } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Routes } from "@/lib/routes";

export default function LoginWithGoogleForm() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: Routes.Dashboard });
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <IconBrandGoogle />
        Login with Google
      </Button>
    </form>
  );
}
