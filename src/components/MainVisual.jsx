// src/components/MainVisual.jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainVisual = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=3000", // 스크롤 거리
          scrub: 1,
          pin: true,
        },
      });

      // 1. 크기는 스크롤 끝까지(100%) 계속 커집니다.
      tl.fromTo(
        ".text-wrap",
        { scale: 1 },
        {
          scale: 100,
          duration: 10, // 비율상 10만큼의 시간 동안 실행
          ease: "power1.inOut",
        }
      );

      // 2. ✨ 핵심: 투명도는 스크롤 80% 지점에서 이미 0이 되어 사라집니다.
      tl.fromTo(
        ".text-wrap",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 8, // 10보다 작으므로 더 빨리 끝남 (스크롤 좀 남았을 때 이미 사라짐)
          ease: "power1.inOut",
        },
        "<" // 중요: 크기 커지는 거랑 '동시에' 시작해라
      );
    },
    { scope: container }
  );

  return (
    <section className="main-visual" ref={container}>
      {/* 텍스트 묶음 */}
      <div className="text-wrap">
        <h2>Creative</h2>
        <h2>Publisher</h2>
        <h2>Na Hyeong</h2>
      </div>
    </section>
  );
};

export default MainVisual;
