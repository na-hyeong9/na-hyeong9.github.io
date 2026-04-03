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
      image: "/images/about/markup.svg",
      title: "UI Markup",
      desc: "HTML5 시맨틱 마크업과 CSS3 기반의 크로스브라우징 퍼블리싱에 능숙합니다. 웹 접근성(KWCAG 2.1) 기준을 준수하며 유지보수 가능한 구조로 작업합니다.",
    },
    {
      id: 2,
      image: "/images/about/refactoring.svg",
      title: "Refactoring & Maintenance",
      desc: "기존 코드의 구조를 분석하고 가독성과 재사용성을 높이는 방향으로 개선합니다. SCSS 모듈화와 컴포넌트 분리를 통해 유지보수하기 쉬운 코드베이스를 만들어갑니다.",
    },
    {
      id: 3,
      image: "/images/about/teamwork.svg",
      title: "Teamwork & Collaboration",
      desc: "Github 와 Notion을 이용한 팀 프로젝트 진행한 경험이 있습니다. 기획, 디자인, 개발과의 협업을 경험한 기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.",
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
          duration: 0.8,
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
