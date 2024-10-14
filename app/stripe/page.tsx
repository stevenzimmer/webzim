import { Metadata } from "next";
import Header from "@/components/layout/header";
import LogoutButton from "@/components/stripe/Logout";
import SignIn from "@/components/stripe/SignIn";
// import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  // title: "ZimGPT | WebDev Zim Project",
  // description:
  //   "A showcase of the OpenAI API and SDK, React, TypeScript, State Management, and Context API.",
  alternates: {
    canonical: "/stripe",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page() {
  // const session = await getServerSession(authOptions);
  // console.log({ session });
  // const users = await prisma.user.findMany();

  // console.log({ users });

  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: session?.user?.email,
  //   },
  // });

  // console.log({ user });

  return (
    <>
      <Header className="text-center">Stripe</Header>
      <div className="text-center">
        {/* {session ? (
          <>
            <p>Secret page</p>
            <LogoutButton />
          </>
        ) : (
          <>
            <p>Sign in to access the secret page</p>
            <SignIn />
          </>
        )} */}
      </div>
    </>
  );
}
