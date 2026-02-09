import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  images: string[];
  link?: string;
}

// 개별 카드 컴포넌트 (기존과 동일)
const ProjectItem = ({ data }: { data: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지 유무 확인
  const hasImages = data.images && data.images.length > 0;

  // 이미지 에러 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/error.jpg";
  };

  return (
    <div className="project-card">
      <div className="main-img-box">
        {hasImages ? (
          // 이미지가 있을 때
          <>
            <img
              className="main-img"
              src={data.images[currentIndex]}
              alt={data.title}
              onError={handleImgError}
            />
            <div className="overlay">
              {data.link ? (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn">
                  Visit Site ↗
                </a>
              ) : (
                <span className="view-btn" style={{ cursor: "default" }}>
                  Internal Project
                </span>
              )}
            </div>
          </>
        ) : (
          // 이미지가 없을 때
          <div className="no-img-placeholder">
            <img
              className="no-img"
              src="/images/no-image.png"
              alt="이미지 없음"
            />
          </div>
        )}
      </div>

      <div className="thumb-row">
        {data.images.map((img, idx) => (
          <button
            key={idx}
            className={`thumb-btn ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}>
            <img src={img} alt={`thumb-${idx}`} onError={handleImgError} />
          </button>
        ))}
      </div>

      <div className="text-box">
        <span className="category">{data.category}</span>
        <h3 className="title">{data.title}</h3>
        {/* 줄바꿈이 있는 설명을 위해 css white-space 적용 필요 */}
        <p className="desc" style={{ whiteSpace: "pre-line" }}>
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default function ProjectList() {
  const projectWrapRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "건설사 원전 사업관리 시스템",
      category: "2025.04 ~ 06 / HTML, CSS, JS",
      desc: "• IBSheet·IBChart 기반 대용량 그리드·차트 UI 구현\n• GitHub 버전 관리 체계 전담 구축 및 퍼블리싱 환경 세팅",
      images: [],
    },
    {
      id: 2,
      title: "공공기관 클라우드 네이티브 시스템",
      category: "2025.03 ~ 04 / React",
      desc: "• 공통 UI 컴포넌트 15종 설계 및 구현\n• 컴포넌트 재사용 구조 적용 (재사용률 약 70% 달성)",
      images: [],
    },
    {
      id: 3,
      title: "건설사 고객센터 시스템",
      category: "2024.07 ~ 12 / Vue.js, SCSS",
      desc: "• UI 컴포넌트 모듈화로 개발 기간 20% 단축\n• SCSS/SASS 기반 스타일 가이드 수립 및 대시보드 구현",
      images: [],
    },
    {
      id: 4,
      title: "공기업 통합경영정보시스템(K-ERP)",
      category: "2024.05 ~ 06 / jQuery",
      desc: "• 적응형 모바일 페이지 퍼블리싱 전담 (100%)\n• 기존 시스템 분석 및 신규 기능 UI 적용",
      images: [],
    },
    {
      id: 5,
      title: "유공자포상 시스템 이관",
      category: "2024.04 ~ 05 / HTML, CSS",
      desc: "• 기존 화면 분석 및 고객사 수정 요구사항 반영\n• 시스템 이관에 따른 UI/UX 최적화 작업",
      images: [],
    },
    {
      id: 6,
      title: "금융권 웹 접근성 향상 프로젝트",
      category: "2023.10 ~ 24.02 / HTML, CSS",
      desc: "• KWCAG 2.1 기준 마크업 개선 및 검수\n• 한국웹접근성인증마크(WA) 획득 달성",
      images: [],
    },
    {
      id: 7,
      title: "공기업 대고객 시스템 개편",
      category: "2023.06 ~ 09 / HTML, CSS, jQuery",
      desc: "• 총 117페이지 화면 퍼블리싱 및 유지보수\n• 적응형 모바일 페이지 구현 전담 (100%)",
      images: [],
    },
  ];

  useGSAP(
    () => {
      // 헤더 애니메이션
      gsap.from(".section-head", {
        scrollTrigger: { trigger: ".section-head", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      // 카드 개별 애니메이션
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    },
    { scope: projectWrapRef },
  );

  return (
    <section className="project-wrap" id="projects" ref={projectWrapRef}>
      <div className="inner">
        <div className="section-head">
          <h2 className="section-title">Project History</h2>
          <p className="sub-desc">
            다양한 도메인에서의 구축 및 운영 경험입니다.
          </p>
        </div>

        <div className="grid-container">
          {projects.map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
