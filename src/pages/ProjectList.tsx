import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  img: string;
  link?: string;
}

export default function ProjectList() {
  const projectWrapRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 헤더 텍스트 애니메이션
      gsap.from(".section-head .section-title, .section-head .sub-desc", {
        scrollTrigger: {
          trigger: ".section-head",
          start: "top 80%",
          toggleActions: "play none play reverse", // 왔다갔다 재생
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
      });

      // 프로젝트 카드 리스트 애니메이션
      gsap.from(".project-item", {
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top 85%",
          toggleActions: "play none play reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
    { scope: projectWrapRef },
  );

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "React / SCSS / GitHub Pages",
      desc: "Wanted Sans를 적용한 깔끔한 개인 포트폴리오 사이트입니다.",
      img: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Task Manager",
      category: "JavaScript / LocalStorage",
      desc: "할 일을 관리하고 상태를 저장하는 생산성 도구입니다.",
      img: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section className="project-wrap" id="projects" ref={projectWrapRef}>
      <div className="inner">
        <div className="section-head">
          <h2 className="section-title">Selected Works</h2>

          <p className="sub-desc">
            디테일과 사용자 경험을 중시하는 결과물입니다.
          </p>
        </div>

        <div className="grid-container">
          {projects.map((item) => (
            <div key={item.id} className="project-item">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <span className="view-btn">View Detail</span>
                </div>
              </div>
              <div className="text-box">
                <span className="category">{item.category}</span>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
