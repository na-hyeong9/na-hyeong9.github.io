import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<string>("");

  // 요소의 위치를 계산하기 위한 ref
  const ulRef = useRef<HTMLUListElement>(null);
  const slideBarRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!activeTab || !ulRef.current || !slideBarRef.current) return;

    // 현재 활성화된 a 태그 찾기
    const activeLink = ulRef.current.querySelector(
      `a[href="#${activeTab}"]`,
    ) as HTMLAnchorElement;

    console.log(`활성화된 탭 ${activeLink}`);

    if (activeLink) {
      const liElement = activeLink.parentElement;
      if (liElement) {
        const left = liElement.offsetLeft;
        const width = liElement.offsetWidth;

        // slide-bar에 CSS 적용
        slideBarRef.current.style.transform = `translateX(${left}px)`;
        slideBarRef.current.style.width = `${width}px`;
        slideBarRef.current.style.opacity = "1";
      }
    }
  }, [activeTab]);

  useEffect(() => {
    // 감지할 섹션들
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 옵저버 해제
  }, []);

  // 스크롤 핸들러
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    const targetContent = document.querySelector(targetId);

    if (targetContent) {
      const offsetTop =
        targetContent.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <header className="header-wrap">
      <div className="inner">
        {/* 로고 영역 */}
        <h1 className="logo">
          <a href="/">NA HYEONG</a>
        </h1>

        {/* PC 네비게이션 */}
        <nav className="gnb pc-only">
          <span
            ref={slideBarRef}
            className="slide-bar"
            aria-hidden="true"
          ></span>

          <ul ref={ulRef}>
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, "#about")}>
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="btn-menu mo-only" onClick={() => setIsOpen(true)}>
          <span>메뉴</span>
        </button>
      </div>

      {/* 모바일 사이드바 */}
      <div className={`side-bar mo-only ${isOpen ? "open" : ""}`}>
        {/* 닫기 버튼 */}
        <button className="btn-close" onClick={() => setIsOpen(false)}>
          ✕
        </button>

        <ul>
          <li>
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScrollTo(e, "#projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* 배경 딤 (모바일 메뉴 열렸을 때 뒤에 깔리는 배경) */}
      {isOpen && <div className="dim" onClick={() => setIsOpen(false)} />}
    </header>
  );
}
