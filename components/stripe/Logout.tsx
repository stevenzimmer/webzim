"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log("sign out");
        signOut({
          callbackUrl: `${window.location.origin}/stripe`,
        });
      }}
    >
      Logout Button
    </button>
  );
}
