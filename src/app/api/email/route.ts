import { sendEmail } from "@/service/email";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
//   const res = await sendEmail();
  return new Response("Hello, Next.js!" + id);
}
