import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <h1>테스트</h1>
      <Image src={`/images/bg_cake.jpg`} width={640} height={800} alt="bg_cake" />
    </section>
  );
}
