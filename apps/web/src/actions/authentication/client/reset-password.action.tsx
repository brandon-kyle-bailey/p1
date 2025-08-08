"use client";

export interface ResetPasswordClientActionProps {
  email: string;
}

export async function ResetPasswordClientAction(
  props: ResetPasswordClientActionProps,
): Promise<void> {
  console.log("ResetPasswordClientAction called with:", props);
}
