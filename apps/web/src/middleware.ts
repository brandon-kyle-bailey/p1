import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { Routes } from "./lib/routes";

const ignoredRoutes = [
  Routes.Home,
  Routes.Tos,
  Routes.PrivacyPolicy,
  Routes.Login,
  Routes.Logout,
  Routes.ForgotPassword,
  Routes.Register,
  Routes.Blog,
  Routes.PaymentsSuccess,
];

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    ignoredRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/"),
    )
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  if (!token) {
    const loginUrl = new URL(Routes.Login, req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
