'use client';

import { useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <>
      {session && session.user && (
        <>
          <span className="avatar" style={{ backgroundImage: `url('${session.user.image}')` }} />
          <strong>{session.user.email ?? session.user.name}</strong>
        </>
      )}
    </>
  );
}
