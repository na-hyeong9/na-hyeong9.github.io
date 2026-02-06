import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainVisual() {
  const mainVisualRef = useRef<HTMLElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mainScrollVh = window.innerHeight;

      gsap.from(".text-wrap h2", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainVisualRef.current,
          start: "top top",
          end: `+=${mainScrollVh * 0.5}`,
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.to(textWrapRef.current, {
        scale: 2,
        opacity: 0,
        ease: "power2.in",
      });
    },
    { scope: mainVisualRef },
  );

  return (
    <section className="main-visual" ref={mainVisualRef}>
      <div className="text-wrap" ref={textWrapRef}>
        <h2>Creative</h2>
        <h2>Publisher</h2>
        <h2>Na Hyeong</h2>
      </div>
    </section>
  );
}
