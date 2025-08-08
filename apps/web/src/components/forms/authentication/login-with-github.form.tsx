import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { SignInWithGithubServerAction } from "../../../actions/authentication/server/sign-in-with-github.action";

export default function LoginWithGithubForm() {
  return (
    <form action={SignInWithGithubServerAction} className="w-full">
      <Button variant="outline" type="submit" className="w-full">
        <IconBrandGithub />
        Login with GitHub
      </Button>
    </form>
  );
}
