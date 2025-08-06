import { signOut } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { Routes } from "@/lib/routes";

export default function LogoutForm() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signOut({ redirectTo: Routes.Login });
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        Log out
      </Button>
    </form>
  );
}
