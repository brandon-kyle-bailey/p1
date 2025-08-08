"use server";
import { signOut } from "@/lib/auth";
import { WebRoutes } from "@/lib/constants";

export async function SignOutServerAction() {
  await signOut({ redirectTo: WebRoutes.Login });
}
