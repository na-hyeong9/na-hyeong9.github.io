import React from "react";

const Contact = () => {
  return (
    <section className="contact-wrap" id="contact">
      <div className="inner">
        <div className="contact-content">
          <h2 className="main-message">
            Let's create <br />
            something <span className="highlight">awesome</span> together.
          </h2>

          <p className="sub-message">
            새로운 프로젝트나 협업 제안은 언제나 환영입니다.
            <br />
            아래 메일로 편하게 연락주세요.
          </p>

          <a href="mailto:developerkimna@gmail.com" className="email-link">
            developerkimna@gmail.com
            <span className="arrow">↗</span>
          </a>

          <div className="social-links">
            <a
              href="https://github.com/na-hyeong9"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/%EB%82%98%ED%98%95-%EA%B9%80-08b8aa36b/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
            >
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
};

export default Contact;
