"use server";

import { signOut } from "@/lib/auth";
import { Routes } from "@/lib/routes";

export async function SignOutAction() {
  await signOut({ redirectTo: Routes.Login });
}
