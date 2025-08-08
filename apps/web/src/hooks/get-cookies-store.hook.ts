/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { Cookies } from "@/lib/constants";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default async function getCookiesStore(): Promise<
  [
    ReadonlyRequestCookies,
    (name: string, value: string, options?: any) => void,
    (name: Cookies) => string | null,
  ]
> {
  const cookieStore = await cookies();
  const setCookie = (name: string, value: string, options?: any) => {
    cookieStore.set(name, value, options);
  };

  const getCookie = (name: Cookies): string | null => {
    const cookie = cookieStore.get(name);
    if (!cookie?.value) {
      return null;
    }
    return cookie.value;
  };

  return [cookieStore, setCookie, getCookie];
}
