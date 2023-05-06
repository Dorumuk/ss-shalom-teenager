"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignInBtn() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      {!session && (
        <Link
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </Link>
      )}
      {session?.user && (
        <>
          {session.user.image && (
            <Link href={`/profile`}>
              <span className="avatar" style={{ backgroundImage: `url('${session.user.image}')` }} />
            </Link>
          )}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email ?? session.user.name}</strong>
          </span>
          <Link
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </Link>
        </>
      )}
    </>
  );
}
