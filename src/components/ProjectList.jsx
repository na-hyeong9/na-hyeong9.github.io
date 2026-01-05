import React from "react";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "React / SCSS / GitHub Pages",
      desc: "Wanted Sans를 적용한 깔끔한 개인 포트폴리오 사이트입니다.",
      img: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "Task Manager",
      category: "JavaScript / LocalStorage",
      desc: "할 일을 관리하고 상태를 저장하는 생산성 도구입니다.",
      img: "https://via.placeholder.com/600x400",
    },
    // 프로젝트가 추가되면 여기에 같은 형식으로 넣으시면 됩니다.
  ];

  return (
    <section className="project-wrap" id="projects">
      <div className="inner">
        <div className="section-head">
          <h2 className="section-title">Selected Works</h2>
          <p className="sub-desc">
            디테일과 사용자 경험을 중시하는 결과물입니다.
          </p>
        </div>

        <div className="grid-container">
          {projects.map((item) => (
            <div key={item.id} className="project-item">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <span className="view-btn">View Detail</span>
                </div>
              </div>
              <div className="text-box">
                <span className="category">{item.category}</span>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
