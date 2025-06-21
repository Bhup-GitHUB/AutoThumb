import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";

import { db } from "~/server/db";
import { SignInSchema } from "~/schema/auth";

/**
 * Extend NextAuth types to include custom properties in session and JWT.
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
  }
}

/**
 * NextAuth configuration
 */
export const authConfig = {
  adapter: PrismaAdapter(db),

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } =
            await SignInSchema.parseAsync(credentials);

          const user = await db.user.findUnique({ where: { email } });
          if (!user || !user.password) throw new Error("User not found");

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) return null;

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error during sign-in:", error.message);
          } else {
            console.error("Authentication error:", error);
          }
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/signin", // Custom sign-in page
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
