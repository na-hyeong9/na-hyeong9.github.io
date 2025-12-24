import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let container = useRef();

  useGSAP(
    () => {
      // 1. 텍스트들이 순차적으로 위로 떠오르는 효과
      gsap.fromTo(
        ".animate-text",
        {
          // 시작 상태
          y: 10,
          opacity: 0,
        },
        {
          // 끝 상태
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%", // 화면의 80% 지점에 도달하면 시작
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1, // 0.1초 간격으로 순차 등장
          ease: "power1.inOut",
        }
      );

      // 2. 스킬바가 쭈욱 차오르는 효과
      gsap.utils.toArray(".progress-bar").forEach((bar) => {
        const width = bar.getAttribute("data-width");

        gsap.fromTo(
          bar,
          {
            // 시작 상태
            width: "0%",
          },
          {
            // 끝 상태
            scrollTrigger: {
              trigger: bar,
              start: "top 90%", // 스킬바가 화면 하단에 보이면 시작
            },
            width: width, // 목표 %로 이동
            duration: 1.5,
            ease: "power2.out",
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section className="about-wrap" id="about" ref={container}>
      <div className="inner">
        {/* 왼쪽: 강렬한 타이틀 (Catchphrase) */}
        <div className="left-col">
          <h2 className="section-title animate-text">
            I Build Value
            <br />
            Beyond Code.
          </h2>
          <p className="sub-desc animate-text">
            사용자의 경험을 최우선으로 생각하는
            <br />
            크리에이티브 퍼블리셔 나형입니다.
          </p>
        </div>

        {/* 오른쪽: 상세 소개 및 스킬 (Detail & Skills) */}
        <div className="right-col">
          <div className="bio-text animate-text">
            <p>
              단순히 디자인을 구현하는 것을 넘어, 웹사이트에 생동감을 불어넣는
              인터랙션 구현을 즐깁니다. React와 GSAP를 활용한 트렌디한 웹 개발에
              강점이 있으며, 항상 새로운 기술에 호기심을 가지고 도전합니다.
            </p>
          </div>

          <div className="skill-list">
            {/* 스킬 아이템 1 */}
            <div className="skill-item animate-text">
              <div className="info">
                <span>HTML/CSS/SCSS</span>
                <span>95%</span>
              </div>
              <div className="bar-bg">
                {/* data-width에 목표 퍼센트를 적어주세요 */}
                <div className="progress-bar" data-width="95%"></div>
              </div>
            </div>

            {/* 스킬 아이템 2 */}
            <div className="skill-item animate-text">
              <div className="info">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="bar-bg">
                <div className="progress-bar" data-width="50%"></div>
              </div>
            </div>

            <div className="skill-item animate-text">
              <div className="info">
                <span>Vue.js</span>
                <span>80%</span>
              </div>
              <div className="bar-bg">
                <div className="progress-bar" data-width="80%"></div>
              </div>
            </div>

            {/* 스킬 아이템 3 */}
            <div className="skill-item animate-text">
              <div className="info">
                <span>GSAP & Interaction</span>
                <span>60%</span>
              </div>
              <div className="bar-bg">
                <div className="progress-bar" data-width="60%"></div>
              </div>
            </div>

            {/* 스킬 아이템 4 */}
            <div className="skill-item animate-text">
              <div className="info">
                <span>javaScript</span>
                <span>80%</span>
              </div>
              <div className="bar-bg">
                <div className="progress-bar" data-width="80%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
