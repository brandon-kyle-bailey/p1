import bcrypt from "bcryptjs";
import NextAuth, { DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { CredentialsSignin } from "next-auth";

class UserExistsError extends CredentialsSignin {
  code = "user_exists";
}

class InvalidCredentialsError extends CredentialsSignin {
  code = "invalid_credentials";
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      provider: string;
      providerAccountId: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider: string;
    providerAccountId: string;
  }
}

const DUMMY_HASH = "$2b$12$invalidsaltinvalidsaltinvalidsaltiY/fu";

const users: Record<string, string>[] = [
  {
    email: "test@test.com",
    password: "$2b$12$AC9ITtLclhsUjIXyleWKouxclj7tmwG1KvM2ffO04UuT9LKPrjNhK",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
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

        await new Promise((res) =>
          setTimeout(res, Math.floor(100 + Math.random() * 100)),
        );

        if (mode === "register") {
          const existingUser = users.find((user) => user.email === email);
          if (existingUser) throw new UserExistsError("User already exists");

          const hashedPassword = await bcrypt.hash(password, 12);
          const user = {
            id: `${users.length + 1}`,
            email,
            password: hashedPassword,
          };
          users.push(user);
          return user;
        }

        const user = users.find((user) => user.email === email);

        const passwordHash = user ? user.password : DUMMY_HASH;
        const isPasswordValid = await bcrypt.compare(password, passwordHash);

        if (!user || !isPasswordValid) {
          throw new InvalidCredentialsError("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("SignIn callback:", {
      //   user,
      //   account,
      //   profile,
      //   email,
      //   credentials,
      // });
      return true;
    },

    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.email = token.email!;
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.provider = token.provider;
        session.user.providerAccountId = token.providerAccountId;
      }
      return session;
    },

    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
