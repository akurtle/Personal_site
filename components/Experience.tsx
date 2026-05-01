import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2>Work Experience</h2>
          <div className="section-line" />
        </div>

        <div className="exp-list">
          {workExperience.map((card) => (
            <div key={card.id} className="exp-card">
              <div>
                <span className="exp-tag">{card.tag}</span>
                <p className="exp-role">{card.title}</p>
                <p className="exp-company">{card.company}</p>
                <p className="exp-desc">{card.desc}</p>
              </div>
              <span className="exp-date">{card.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
