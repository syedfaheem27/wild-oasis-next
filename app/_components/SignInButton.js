"use client";

import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button
      onClick={() =>
        signIn("google", { callbackUrl: "http://localhost:3000/account" })
      }
      className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
    >
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;

//TODO: Instead of performing the signing in on the client side
// do it on the server side
