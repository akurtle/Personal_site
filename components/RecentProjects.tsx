"use client";
import { useState } from "react";
import { moreProjects, projects } from "@/data";
import Image from "next/image";

type Project = (typeof projects)[number];

const INITIAL_COUNT = 4;

const allProjects = [
  ...projects.map((p) => ({ ...p, key: `featured-${p.id}`, featured: true })),
  ...moreProjects.map((p) => ({ ...p, key: `more-${p.id}`, featured: false })),
];

const ProjectCard = ({
  title,
  des,
  img,
  iconLists,
  link,
  featured,
}: Project & { featured: boolean }) => (
  <a
    href={link}
    className={`project-card${featured ? " project-featured" : ""}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="project-thumb">
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 900px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="project-meta">
      <div className="project-name">{title}</div>
      <div className="project-desc">{des}</div>
      <div className="project-footer">
        <div className="chip-wrap">
          {iconLists.slice(0, 4).map((icon) => (
            <Image
              key={icon}
              src={icon.startsWith("./") ? icon.slice(1) : icon}
              alt=""
              width={20}
              height={20}
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
        <span className="view-link">view →</span>
      </div>
    </div>
  </a>
);

const RecentProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? allProjects : allProjects.slice(0, INITIAL_COUNT);
  const hiddenCount = allProjects.length - INITIAL_COUNT;

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2>Recent Projects</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {displayed.map(({ key, ...project }) => (
            <ProjectCard key={key} {...project} />
          ))}
        </div>

        {hiddenCount > 0 && (
          <button
            className="btn-ghost projects-toggle"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : `View more (${hiddenCount})`}
            <span className={`projects-toggle-caret${showAll ? " open" : ""}`}>▾</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
