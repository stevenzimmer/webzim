import type { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma) as Adapter,
//   providers: [
//     EmailProvider({
//       server: {
//         host: process.env.EMAIL_SERVER_HOST,
//         port: process.env.EMAIL_SERVER_PORT,
//         auth: {
//           user: process.env.EMAIL_SERVER_USER,
//           pass: process.env.EMAIL_SERVER_PASSWORD,
//         },
//       },
//       from: process.env.EMAIL_FROM,
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       console.log({ user, account, profile });
//       return true;
//     },
//     async redirect(url, baseUrl) {
//       console.log({ url, baseUrl });
//       return baseUrl;
//     },
//     async session(session, user) {
//       console.log({ session, user });
//       return session;
//     },
//     async jwt(token, user, account, profile, isNewUser) {
//       console.log({ token, user, account, profile, isNewUser });
//       return token;
//     },
//   },
// };
