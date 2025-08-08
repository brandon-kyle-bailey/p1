"use server";
import { signIn } from "@/lib/auth";
import { AuthProviders, SignInActionOptions } from "@/lib/constants";

export interface OAuthSignInServer {
  provider: AuthProviders.Github | AuthProviders.Google;
  credentials?: never;
  options: SignInActionOptions;
}

export type SignInServerActionProps = OAuthSignInServer;

export async function SignInServerAction(props: SignInServerActionProps) {
  await signIn(props.provider, props.options);
}
