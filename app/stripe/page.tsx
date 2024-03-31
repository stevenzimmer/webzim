import Header from "@/components/layout/header";
import LogoutButton from "@/components/stripe/Logout";
import SignIn from "@/components/stripe/SignIn";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log({ session });
  return (
    <>
      <Header className="text-center">Stripe</Header>
      <div className="text-center">
        {session ? (
          <>
            <p>Secret page</p>
            <LogoutButton />
          </>
        ) : (
          <>
            <p>Sign in to access the secret page</p>
            <SignIn />
          </>
        )}
      </div>
    </>
  );
}
