import { signIn } from "@/lib/auth";
import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Routes } from "@/lib/routes";

export default function LoginWithGithubForm() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: Routes.Dashboard });
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <IconBrandGithub />
        Login with GitHub
      </Button>
    </form>
  );
}
