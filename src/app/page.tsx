import CarouselPosts from "./components/CarouselPosts";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </>
  );
}
