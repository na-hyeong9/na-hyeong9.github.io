import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom"; // 팝업을 겹침 없이 최상단에 띄우기 위해 추가
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  contribution: string;
  desc: string;
  images: string[];
  link?: string;
}

// 개별 카드 컴포넌트
const ProjectItem = ({ data }: { data: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const thumbRowRef = useRef<HTMLDivElement>(null);

  // 이미지 유무 확인
  const hasImages = data.images && data.images.length > 0;

  // 이미지 에러 핸들러
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/no-image.png";
  };

  // 모달이 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const thumbElement = thumbRowRef.current;
    if (!thumbElement) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        thumbElement.scrollLeft += e.deltaY;
      }
    };

    thumbElement.addEventListener("wheel", handleWheel, { passive: false });

    // 클린업 함수
    return () => {
      thumbElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div className="project-card">
        <div className="main-img-box">
          {hasImages ? (
            <>
              <img
                className="main-img"
                src={data.images[currentIndex]}
                alt={data.title}
                onError={handleImgError}
              />
              <div className="overlay">
                {/* 이미지 모달 버튼 */}
                <button
                  className="view-img-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  크게 보기
                </button>
              </div>
            </>
          ) : (
            <div className="no-img-placeholder">
              <img
                className="no-img"
                src="/images/no-image.png"
                alt="이미지 없음"
              />
            </div>
          )}
        </div>

        {/* 썸네일 리스트 */}
        <div className="thumb-row" ref={thumbRowRef}>
          {data.images.map((img, idx) => (
            <button
              key={idx}
              className={`thumb-btn ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img src={img} alt={`thumb-${idx}`} onError={handleImgError} />
            </button>
          ))}
        </div>

        {/* 텍스트 정보 */}
        <div className="text-box">
          <span className="category">{data.category}</span>
          <h3 className="title">{data.title}</h3>
          <div className="contribution-badge">
            <span className="label">기여도</span>
            <span className="value">{data.contribution}</span>
          </div>
          <p className="desc" style={{ whiteSpace: "pre-line" }}>
            {data.desc}
          </p>
        </div>
      </div>

      {/* 팝업(모달) 영역 - createPortal을 사용하여 body 바로 아래에 렌더링 */}
      {isModalOpen &&
        createPortal(
          <div
            className="img-modal-backdrop"
            onClick={() => setIsModalOpen(false)}
          >
            {/* 내부 콘텐츠 클릭 시에는 팝업이 닫히지 않도록 stopPropagation */}
            <div
              className="img-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={data.images[currentIndex]}
                alt={`${data.title} 원본 이미지`}
              />
            </div>

            {/* 닫기 버튼 (우측 상단 고정) */}
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>,
          document.body,
        )}
    </>
  );
};

export default function ProjectList() {
  const projectWrapRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "공기업 대고객 시스템 개편",
      category: "2023.06 ~ 09 / HTML, CSS, jQuery",
      contribution: "50%",
      desc: "• 총 117페이지 화면 퍼블리싱 및 유지보수\n• 적응형 모바일 페이지 구현 전담 (기여도 100%)",
      images: [
        "/images/projects/kbiz/kbiz-01.png",
        "/images/projects/kbiz/kbiz-02.png",
        "/images/projects/kbiz/kbiz-03.png",
        "/images/projects/kbiz/kbiz-04.png",
        "/images/projects/kbiz/kbiz-05.png",
        "/images/projects/kbiz/kbiz-06.png",
      ],
    },
    {
      id: 2,
      title: "금융권 웹 접근성 향상 프로젝트",
      category: "2023.10 ~ 24.02 / HTML, CSS",
      contribution: "20%",
      desc: "• KWCAG 2.1 기준 마크업 개선 및 검수\n• 한국웹접근성인증마크(WA) 획득 달성",
      images: ["/images/projects/sc/sc-01.png"],
    },
    {
      id: 3,
      title: "유공자포상 시스템 이관",
      category: "2024.04 ~ 05 / HTML, CSS",
      contribution: "100%",
      desc: "• 기존 화면 분석 및 고객사 수정 요구사항 반영\n• 시스템 이관에 따른 UI/UX 최적화 작업",
      images: [],
    },
    {
      id: 4,
      title: "공기업 통합경영정보시스템(K-ERP)",
      category: "2024.05 ~ 06 / HTML, CSS, jQuery",
      contribution: "100%",
      desc: "• 적응형 모바일 페이지 퍼블리싱 전담 (기여도 100%)\n• 기존 시스템 분석 및 신규 기능 UI 적용",
      images: [
        "/images/projects/kerp/kbiz-01.png",
        "/images/projects/kerp/kbiz-02.png",
        "/images/projects/kerp/kbiz-03.png",
        "/images/projects/kerp/kbiz-04.png",
        "/images/projects/kerp/kbiz-05.png",
      ],
    },
    {
      id: 5,
      title: "건설사 고객센터 시스템",
      category: "2024.07 ~ 12 / Vue.js, SCSS",
      contribution: "50%",
      desc: "• UI 컴포넌트 모듈화로 개발 기간 20% 단축\n• SCSS/SASS 기반 스타일 가이드 수립 및 대시보드 구현",
      images: [
        "/images/projects/hicc/hicc-01.png",
        "/images/projects/hicc/hicc-02.png",
        "/images/projects/hicc/hicc-03.png",
        "/images/projects/hicc/hicc-04.png",
      ],
    },
    {
      id: 6,
      title: "공공기관 클라우드 네이티브 시스템",
      category: "2025.03 ~ 04 / React",
      contribution: "20%",
      desc: "• 공통 UI 컴포넌트 15종 설계 및 구현\n• 컴포넌트 재사용 구조 적용 (재사용률 약 50% 달성)",
      images: [
        "/images/projects/uj/uj-01.png",
        "/images/projects/uj/uj-02.png",
        "/images/projects/uj/uj-03.png",
        "/images/projects/uj/uj-04.png",
      ],
    },
    {
      id: 7,
      title: "건설사 원전 사업관리 시스템",
      category: "2025.04 ~ 06 / HTML, CSS, JS ",
      contribution: "100%",
      desc: "• IBSheet·IBChart 기반 대용량 그리드·차트 UI 구현\n• GitHub 버전 관리 체계 전담 구축 및 퍼블리싱 환경 세팅",
      images: [
        "/images/projects/nova/nova-01.png",
        "/images/projects/nova/nova-02.png",
        "/images/projects/nova/nova-03.png",
        "/images/projects/nova/nova-04.png",
      ],
    },
    {
      id: 8,
      title: "공기업 마켓 정식플랫폼 구축 사업",
      category: "2025.07.01 ~ 2025.11.20 / HTML, CSS, JQuery",
      contribution: "80%",
      desc: "• GitHub 버전 관리 체계 전담 구축 및 퍼블리싱 환경 초기 세팅\n• 공통 UI 컴포넌트 설계·모듈화로 화면 전반의 재사용성 확보 및 작업 효율 향상\n• 반응형·적응형 대응으로 PC·모바일 멀티 디바이스 환경 완성\n• 총 106본 이상 화면 퍼블리싱 기여도 80%로 완료",
      images: [
        "/images/projects/techmk/tech-01.png",
        "/images/projects/techmk/tech-02.png",
        "/images/projects/techmk/tech-03.png",
        "/images/projects/techmk/tech-04.png",
        "/images/projects/techmk/tech-05.png",
        "/images/projects/techmk/tech-06.png",
        "/images/projects/techmk/tech-07.png",
        "/images/projects/projects/techmk/tech-08.png",
      ],
    },
  ];

  useGSAP(
    () => {
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
          {[...projects].reverse().map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
