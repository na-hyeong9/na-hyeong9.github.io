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
      console.log(mainScrollVh);
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
          // pin: true,
          pinSpacing: false,
          pinType: "fixed",
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
      <div className="wave-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" className="wave-1" />
            <use xlinkHref="#gentle-wave" x="48" y="3" className="wave-2" />
            <use xlinkHref="#gentle-wave" x="48" y="5" className="wave-3" />
            <use xlinkHref="#gentle-wave" x="48" y="7" className="wave-4" />
          </g>
        </svg>
      </div>

      <div className="text-wrap" ref={textWrapRef}>
        <h2>Creative</h2>
        <h2>Publisher</h2>
        <h2>Na Hyeong</h2>
      </div>
    </section>
  );
}
