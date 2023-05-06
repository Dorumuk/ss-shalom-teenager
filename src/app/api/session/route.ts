import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

// next 13
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}

// next 12
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getServerSession(req, res, authOptions);
//   res.send(JSON.stringify(session, null, 2));
// }
