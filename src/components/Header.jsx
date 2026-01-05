import React, { useState } from "react";

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  // 스무스 스크롤 핸들러
  let handleScrollTo = (e, targetId) => {
    e.preventDefault();

    let targetContent = document.querySelector(targetId);

    if (targetContent) {
      let offsetTop =
        targetContent.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setIsOpen(false); // 모바일 메뉴 닫기
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
          <ul>
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
};

export default Header;
