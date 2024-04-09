"use client";
import { FormEvent, useState } from "react";
// import { signIn } from "next-auth/react";

export default function SignIn() {
  const [email, setEmail] = useState("stevenzimmer40@gmail.com");

  async function SignInWithEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("sign in");
    console.log({ email });
    // const signInResult = await signIn("email", {
    //   email,
    //   callbackUrl: `${window.location.origin}/stripe`,
    // });

    // console.log({ signInResult });

    // if (!signInResult?.ok) {
    //   return;
    // }

    // console.log({ signInResult });
    // Call your server to send a sign-in email
  }
  return (
    <form onSubmit={SignInWithEmail}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="name@example.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <button type="submit">Sign In with email</button>
    </form>
  );
}
