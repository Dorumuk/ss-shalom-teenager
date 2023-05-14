import { sendEmail } from "@/service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
    
    const body = await req.json(); // request.body: ❌, node에서는 req가 string으로 오기때문에 json으로 변경해야함.
    console.log(body);
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송을 실패했습니다.2"}), { status: 400 });
  }
  return sendEmail(body)
  .then(()=> new Response(JSON.stringify({ message: "메일을 성공적으로 보냈습니다."}), {status: 200}))
  .catch(error=> {
    console.log(error);
    // JSON.stringify({ message: ""}) 👈 이 포맷은 서버와 클라이언트 간 암묵적 약속 이다. (참고: contact.ts 13줄)
    return new Response(JSON.stringify({ message: "메일 전송을 실패했습니다.3"}), {status: 500})
  })
}
