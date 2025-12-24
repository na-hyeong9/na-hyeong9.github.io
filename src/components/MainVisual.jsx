import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainVisual = () => {
  const container = useRef();
  const textWrap = useRef();

  // ✅ 페이지 로드 시 무조건 최상단
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      const vh = window.innerHeight;
      const scrollDistance = vh * 2; // 2배 스크롤 (조정 가능: 2, 2.5, 3)

      gsap.fromTo(
        textWrap.current,
        {
          scale: 0.5,
          opacity: 1,
        },
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
          },
          scale: 1.5,
          opacity: 0,
          ease: "power2.inOut",
        }
      );
    },
    { scope: container }
  );

  return (
    <section className="main-visual" ref={container}>
      <div className="text-wrap" ref={textWrap}>
        <h2>Creative</h2>
        <h2>Publisher</h2>
        <h2>Na Hyeong</h2>
      </div>
    </section>
  );
};

export default MainVisual;
