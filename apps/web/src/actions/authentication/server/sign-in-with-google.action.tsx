"use server";

import { AuthProviders, WebRoutes } from "@/lib/constants";
import { SignInServerAction } from "./sign-in.action";

export async function SignInWithGoogleServerAction() {
  await SignInServerAction({
    provider: AuthProviders.Google,
    options: { redirect: true, redirectTo: WebRoutes.Dashboard },
  });
}
