"use client";
import { useState } from "react";
import { courses } from "@/data";

const Courses = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? courses : courses.slice(0, 4);

  return (
    <section id="courses">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2>University Courses</h2>
          <div className="section-line" />
        </div>

        <div className="terminal-wrap">
          <div className="terminal">
            <div className="terminal-titlebar">
              <span className="term-dot term-dot-red" />
              <span className="term-dot term-dot-yellow" />
              <span className="term-dot term-dot-green" />
              <span className="terminal-title">bash — courses.sh</span>
            </div>

            <div className="terminal-body">
              <p className="term-prompt">
                <span className="prompt-user">mirza@mun</span>
                <span style={{ color: "var(--text3)" }}>:~$ </span>
                <span style={{ color: "var(--text2)" }}>
                  grep -r &quot;courses I loved&quot; ./university
                </span>
              </p>
              <p className="term-comment">
                {"// found "}{courses.length}{" results"}
              </p>

              <div>
                {displayed.map((c) => (
                  <div key={c.title} className="course-row">
                    <span className="course-code">[{c.title}]</span>
                    <span className="course-desc">{c.description}</span>
                  </div>
                ))}
              </div>

              <p className="term-prompt" style={{ marginTop: "12px" }}>
                <span className="prompt-user">mirza@mun</span>
                <span style={{ color: "var(--text3)" }}>:~$ </span>
                {!showAll ? (
                  <button
                    className="term-show-all"
                    onClick={() => setShowAll(true)}
                  >
                    show --all<span className="cursor" />
                  </button>
                ) : (
                  <span className="cursor" />
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
