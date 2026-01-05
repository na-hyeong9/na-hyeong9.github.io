import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainVisual = () => {
  let container = useRef();
  let textWrap = useRef();

  useGSAP(
    () => {
      gsap.from(".text-wrap h2", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(textWrap.current, {
        scale: 2,
        opacity: 0,
        ease: "power2.in",
      });
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
