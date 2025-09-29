/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";
import NextAuth, { DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { CredentialsSignin } from "next-auth";
import { SignInModes } from "./constants";

class InvalidCredentialsError extends CredentialsSignin {
  code = "invalid_credentials";
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username?: string;
      role?: string;
      accountId?: string;
      accessToken?: string;
      refreshToken?: string;
      provider?: string;
      providerType?: string;
      providerAccountId?: string;
      providerAccessToken?: string;
      providerAccessTokenType?: string;
      providerAccessTokenScope?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    role?: string;
    accountId?: string;
    accessToken?: string;
    refreshToken?: string;
    provider?: string;
    providerType?: string;
    providerAccountId?: string;
    providerAccessToken?: string;
    providerAccessTokenType?: string;
    providerAccessTokenScope?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },
  providers: [
    GitHub({
      // clientId: process.env.GITHUB_ID!,
      // clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      // clientId: process.env.GOOGLE_ID!,
      // clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        mode: { label: "Mode", type: "text" },
      },
      async authorize(credentials) {
        const { email, password, mode } = credentials as {
          email: string;
          password: string;
          mode: "login" | "register";
        };

        if (!email || !password) return null;

        const endpoint =
          mode === SignInModes.Register
            ? "http://localhost:3000/api/core/v1/auth/register"
            : "http://localhost:3000/api/core/v1/auth/login";
        const fetchBody =
          mode === SignInModes.Register
            ? { username: email, password, confirmPassword: password }
            : { username: email, password };

        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fetchBody),
        });

        if (!res.ok) {
          throw new InvalidCredentialsError("Invalid credentials");
        }

        const data = await res.json();

        if (!data?.access_token) {
          throw new InvalidCredentialsError("Invalid credentials");
        }

        const decoded = jwt.decode(data.access_token) as {
          sub: string;
          username: string;
          role: string;
          accountId: string;
        };

        if (!decoded?.sub) {
          throw new InvalidCredentialsError("Invalid access token");
        }

        return {
          id: decoded.sub,
          email,
          username: decoded.username,
          role: decoded.role,
          accountId: decoded.accountId,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Credentials login
      if (user && (user as any).accessToken) {
        token.sub = user.id as string;
        token.email = user.email as string;
        token.username = (user as any).username;
        token.role = (user as any).role;
        token.accountId = (user as any).accountId;
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
      }

      // OAuth login
      if (account && account.provider !== "credentials") {
        token.provider = account.provider;
        token.providerType = account.type;
        token.providerAccountId = account.providerAccountId;
        token.providerAccessToken = account.access_token || "";
        token.providerAccessTokenType = account.token_type || "";
        token.providerAccessTokenScope = account.scope || "";
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.sub!;
      session.user.email = token.email!;
      session.user.name = token.name;
      session.user.image = token.picture;

      session.user.username = token.username;
      session.user.role = token.role;
      session.user.accountId = token.accountId;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;

      session.user.provider = token.provider;
      session.user.providerType = token.providerType;
      session.user.providerAccountId = token.providerAccountId;
      session.user.providerAccessToken = token.providerAccessToken;
      session.user.providerAccessTokenType = token.providerAccessTokenType;
      session.user.providerAccessTokenScope = token.providerAccessTokenScope;

      return session;
    },

    authorized: async ({ auth }) => !!auth,
  },
});
