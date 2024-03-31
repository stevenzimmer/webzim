import { authOptions } from "@/utils/auth";
import UserProfile from "../UserProfile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
export default async function StripeUser() {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   return redirect("/stripe");
  // }

  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email || "stevenzimmer40@gmail.com",
    },
  });

  const sessions = await prisma.session.findMany({
    where: {
      userId: user?.id,
    },
  });

  console.log({ sessions });

  const verifications = await prisma.verificationToken.findMany({
    where: {
      identifier: user?.email,
    },
  });

  console.log({ verifications });

  return (
    <div className="rounded-lg bg-slate-800 p-6">
      <h1 className="text-2xl text-white">{user?.id}</h1>
      <p>Email: {user?.email}</p>
      <p>Total Downloads: {user?.totalDownloads}</p>
      <p>Stripe Customer ID: {user?.stripeCustomerId}</p>
      <p>Stripe Subscription ID: {user?.subscriptionId}</p>

      <h2 className="mb-3 mt-6 text-xl">Previous Sessions</h2>
      {sessions.map((session, i) => (
        <div key={i} className="mb-3">
          <p>{session.id}</p>
          <p>{session.sessionToken}</p>
          <p>
            {session.expires.toLocaleDateString()} at{" "}
            {session.expires.toLocaleTimeString()}
          </p>
        </div>
      ))}

      <h2 className="mb-3 mt-6 text-xl">Previous Verifications</h2>
      {verifications.map((verification, i) => (
        <div key={i} className="mb-3">
          <p>
            Verfication Expires: {verification.expires.toLocaleDateString()} at{" "}
            {verification.expires.toLocaleTimeString()}
          </p>
        </div>
      ))}
      {/* <UserProfile /> */}
    </div>
  );
}
