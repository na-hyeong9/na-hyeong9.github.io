import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  const skills = [
    { name: "HTML5 / CSS3", level: "95%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "50%" },
    { name: "Vue.js", level: "50%" },
    { name: "SCSS / SASS", level: "90%" },
  ];

  useGSAP(
    () => {
      // 1. 왼쪽 텍스트 그룹 애니메이션 (제목 -> 설명 순서)
      gsap.from(".left-col .section-title, .left-col .sub-desc ", {
        scrollTrigger: {
          trigger: "left-col",
          start: "top top",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.inout",
        stagger: 0.3,
      });
      // 2. 오른쪽 스킬바 애니메이션
      gsap.to(".progress-bar", {
        scrollTrigger: {
          trigger: ".right-col",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        width: (i, target) => target.dataset.level,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
    { scope: aboutRef }, // ref 범위 설정
  );

  return (
    <section className="about-wrap" id="about" ref={aboutRef}>
      <div className="inner">
        {/* 왼쪽 영역 */}
        <div className="left-col">
          <h2 className="section-title">
            Design with
            <br />
            Efficiency
          </h2>
          <p className="sub-desc">
            끊임없이 변화하는 웹 환경에서
            <br />
            최적의 퍼블리싱 솔루션을 찾습니다.
          </p>
        </div>

        {/* 오른쪽 영역 */}
        <div className="right-col">
          <p className="bio-text">
            사용자 경험을 최우선으로 생각하며, 유지보수가 용이하고
            <br />
            깔끔한 코드를 작성하는 것을 목표로 합니다.
          </p>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="info">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="bar-bg">
                  <div
                    className="progress-bar"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
