import Image from "next/image";
import bg_cake from "/public/images/bg_cake.jpg";

export default function Hero() {
  return (
    <section>
      <h1>테스트</h1>
      <Image src={bg_cake} width={640} height={800} alt="bg_cake" priority/>
    </section>
  );
}
