import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function LunchMenuPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>점심 메뉴</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
