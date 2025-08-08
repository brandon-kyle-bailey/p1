import { IconBrandGoogle } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { SignInWithGithubServerAction } from "@/actions/authentication/server/sign-in-with-github.action";

export default function LoginWithGoogleForm() {
  return (
    <form action={SignInWithGithubServerAction} className="w-full">
      <Button variant="outline" type="submit" className="w-full">
        <IconBrandGoogle />
        Login with Google
      </Button>
    </form>
  );
}
