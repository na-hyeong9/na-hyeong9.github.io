import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface About {
  id: number;
  image: string;
  title: string;
  desc: string;
}

export default function About() {
  const aboutWrapRef = useRef<HTMLElement>(null);

  const abouts: About[] = [
    {
      id: 1,
      image: "/images/about/markup.png",
      title: "UI Markup",
      desc: "HTML5 시맨틱 마크업과 CSS3 기반의 크로스브라우징 퍼블리싱에 능숙합니다. 웹 접근성(KWCAG 2.1) 기준을 준수하며 유지보수 가능한 구조로 작업합니다.",
    },
    {
      id: 2,
      image: "/images/about/component.png",
      title: "Component Development",
      desc: "React·Vue.js 기반 재사용 가능한 UI 컴포넌트를 설계하고 구현합니다. SCSS 모듈화와 스타일 가이드 수립으로 협업 효율을 높입니다.",
    },
    {
      id: 3,
      image: "/images/about/interaction.png",
      title: "Interaction & Animation",
      desc: "GSAP·ScrollTrigger를 활용한 스크롤 인터랙션과 마이크로 애니메이션을 구현합니다. 사용자 경험을 고려한 자연스러운 동작을 추구합니다.",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".about-section-head", {
        scrollTrigger: {
          trigger: ".about-section-head",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      const cards = gsap.utils.toArray(".about-card");
      cards.forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    },
    { scope: aboutWrapRef },
  );

  return (
    <section className="about-wrap" id="about" ref={aboutWrapRef}>
      <div className="inner">
        <div className="about-section-head">
          <h2 className="section-title">Core Abouts</h2>
          <p className="sub-desc">주요 기술 역량과 경험입니다.</p>
        </div>

        <div className="about-grid">
          {abouts.map((item) => (
            <div className="about-card" key={item.id}>
              <div className="about-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="about-text-box">
                <h3 className="about-title">{item.title}</h3>
                <p className="about-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
