import React from "react";

const Header = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();

    let targetContent = document.querySelector(targetId);
    let headerHeight = 80;

    if (targetContent) {
      let offsetTop =
        targetContent.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header-wrap">
      <div className="inner">
        {/* 로고 영역 */}
        <h1 className="logo">
          <a href="/">NA HYEONG</a>
        </h1>

        {/* 네비게이션 (GNB) */}
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

        {/* 모바일 메뉴 버튼 (모양만 잡아둠) */}
        <button className="btn-menu mo-only">
          <span>메뉴</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
