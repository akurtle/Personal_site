import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2>Recent Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <a
              key={id}
              href={link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-thumb">
                <img src={img} alt={title} />
              </div>
              <div className="project-meta">
                <div className="project-name">{title}</div>
                <div className="project-desc">{des}</div>
                <div className="project-footer">
                  <div className="chip-wrap">
                    {iconLists.slice(0, 4).map((icon) => (
                      <img
                        key={icon}
                        src={icon}
                        alt=""
                        style={{ width: "20px", height: "20px", objectFit: "contain" }}
                      />
                    ))}
                  </div>
                  <span className="view-link">view →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
