import React from "react";
import "./Header.scss"; // 1. 내 짝꿍 스타일 파일 연결

const Header = () => {
  return (
    <header className="header_wrap">
      <div className="inner">
        {/* 로고 영역 */}
        <h1 className="logo">
          <a href="/">NA HYEONG</a>
        </h1>

        {/* 네비게이션 (GNB) */}
        <nav className="gnb pc-only">
          {" "}
          {/* 모바일 구현 전이라 일단 pc-only 클래스 붙임 */}
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
