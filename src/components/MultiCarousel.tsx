"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// react-multi-carousel가 이 컴포넌트를 통해서만 사용되게 만들어서,
// 컴포넌트 교체를 쉽게하거나 재사용성을 높인다.

type Props = {
  children: React.ReactNode;
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel infinite autoPlay responsive={responsive} itemClass="m-2">
      {children}
    </Carousel>
  );
}
