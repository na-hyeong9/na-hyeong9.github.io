import React from "react";

export default function Contact() {
  return (
    <section className="contact-wrap" id="contact">
      <div className="inner">
        <div className="contact-content">
          <h2 className="main-message">
            Let's create <br />
            something <span className="highlight">awesome</span> together.
          </h2>

          <p className="sub-message">
            감사합니다.
            <br />
            궁금한 점이 있으시면 아래 메일로 편하게 연락주세요.
          </p>

          <a href="mailto:devkimna@gmail.com" className="email-link">
            devkimna@gmail.com
            <span className="arrow">↗</span>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/na-hyeong9"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/%EB%82%98%ED%98%95-%EA%B9%80-08b8aa36b/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; 2026 Na Hyeong. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
