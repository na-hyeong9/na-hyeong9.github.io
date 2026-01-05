import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  // 스킬 데이터
  const skills = [
    { name: "HTML5 / CSS3", level: "95%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "50%" },
    { name: "Vue.js", level: "50%" },
    { name: "SCSS / SASS", level: "90%" },
  ];

  useGSAP(
    () => {
      // 모든 progress-bar를 찾아서 애니메이션 적용
      gsap.to(".progress-bar", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 90%", // 섹션이 화면 70% 지점에 올 때 시작
          toggleActions: "play none none reverse",
        },
        width: (i, target) => target.dataset.level, // 데이터셋에서 퍼센트 가져옴
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2, // 순차적으로 실행
      });
    },
    { scope: aboutRef }
  );

  return (
    <section className="about-wrap" id="about" ref={aboutRef}>
      <div className="inner">
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
                    data-level={skill.level} // GSAP이 읽을 퍼센트 값
                    style={{ width: "0%" }} // 초기값 0
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
