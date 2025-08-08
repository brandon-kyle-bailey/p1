"use server";

import { AuthProviders, WebRoutes } from "@/lib/constants";
import { SignInServerAction } from "./sign-in.action";

export async function SignInWithGithubServerAction() {
  await SignInServerAction({
    provider: AuthProviders.Github,
    options: { redirect: true, redirectTo: WebRoutes.Dashboard },
  });
}
