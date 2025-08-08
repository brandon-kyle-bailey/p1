"use client";
import {
  signIn as clientSignIn,
  SignInOptions,
  SignInResponse,
} from "next-auth/react";
import { AuthProviders, SignInActionOptions } from "@/lib/constants";

export interface SignInActionClientOptions extends SignInActionOptions {
  redirect: false;
  redirectTo?: never;
}

export interface CredentialsSignInClientOptions
  extends Omit<SignInOptions, "redirect">,
    SignInActionClientOptions {
  email: string;
  password: string;
}

export interface CredentialsSignInClient {
  provider: AuthProviders.Credentials;
  options: CredentialsSignInClientOptions;
}

export type SignInClientActionProps = CredentialsSignInClient;

export async function SignInClientAction(
  props: SignInClientActionProps,
): Promise<SignInResponse> {
  return await clientSignIn(props.provider, props.options);
}
