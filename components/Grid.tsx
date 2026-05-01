"use client";
import { useState } from "react";

const STACK = [
  { label: "React",      cls: "chip-green"  },
  { label: "Next.js",    cls: "chip-green"  },
  { label: "Node.js",    cls: "chip-blue"   },
  { label: "Python",     cls: "chip-blue"   },
  { label: "Pandas",     cls: "chip-purple" },
  { label: "NumPy",      cls: "chip-purple" },
  { label: "SQL",        cls: "chip-orange" },
  { label: "Sci-Kit",    cls: "chip-purple" },
  { label: "HTML/CSS",   cls: "chip-orange" },
  { label: "JavaScript", cls: "chip-green"  },
];

const CopyEmailBtn = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("myzbaig@mun.ca");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="copy-email-btn">
      {copied ? "✓ copied!" : "□ copy my email"}
    </button>
  );
};

const Grid = () => {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2>About</h2>
          <div className="section-line" />
        </div>

        <div className="bento-grid">
          {/* Photo */}
          <div className="bento-card bc-photo">
            <div className="photo-wrap">
              <img
                src="/myImage.webp"
                alt="Mirza Yousuf"
                style={{ objectPosition: "left center" }}
              />
              <div className="photo-overlay">
                <p className="photo-name">Mirza Yousuf</p>
                <p className="photo-handle">@akurtle</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bento-card bc-status">
            <div className="card-label">status</div>
            <h3 className="card-title" style={{ fontSize: "20px" }}>
              <span className="avail-dot" />
              Looking for a job
            </h3>
            <p className="card-sub">Graduated in August 2025</p>
            <div className="code-snippet">
              <span className="kw">const</span>{" "}
              <span className="var">status</span>
              {" = {"}
              <br />
              {"  "}
              <span className="str">"graduated"</span>
              {": "}
              <span className="str">"Aug 2025"</span>
              {","}
              <br />
              {"  "}
              <span className="str">"openToWork"</span>
              {": "}
              <span className="kw">true</span>
              <br />
              {"}"}
            </div>
          </div>

          {/* Stack */}
          <div className="bento-card bc-stack">
            <div className="card-label">tech stack</div>
            <h3 className="card-title" style={{ fontSize: "14px" }}>
              I constantly try to improve
            </h3>
            <div className="chip-wrap" style={{ marginTop: "12px" }}>
              {STACK.map((s) => (
                <span key={s.label} className={`chip ${s.cls}`}>
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bento-card bc-interests">
            <div className="card-label">interests</div>
            <ul className="interests-list">
              <li>Full Stack</li>
              <li>Cybersecurity</li>
              <li>Data Science</li>
              <li>Game Dev</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bento-card bc-contact">
            <div className="card-label">contact</div>
            <h3 className="card-title" style={{ fontSize: "16px" }}>
              Start a project together?
            </h3>
            <CopyEmailBtn />
          </div>

          {/* Portfolio Game / Gazette */}
          <a
            className="bento-card bc-game"
            href="https://gazette.mun.ca/research/space-explorers-wanted/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
          >
            <div className="card-label">in the news</div>
            <h3 className="card-title" style={{ fontSize: "16px" }}>
              Space Explorers Wanted
            </h3>
            <p className="card-sub" style={{ marginBottom: "12px" }}>
              MUN Gazette — built a 2D space game for the Johnson Geo Centre,
              featured in university research news.
            </p>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "var(--green)",
              }}
            >
              read article →
            </span>
          </a>
        </div>

        {/* Embedded game */}
        <div style={{ marginTop: "24px", background: "var(--border)", borderRadius: "12px", overflow: "hidden" }}>
          <div
            style={{
              background: "var(--bg2)",
              borderTop: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                background: "var(--bg3)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <span className="term-dot term-dot-red" />
              <span className="term-dot term-dot-yellow" />
              <span className="term-dot term-dot-green" />
              <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--text3)", marginLeft: "8px" }}>
                kaboom.js — portfolio-game
              </span>
            </div>
            <div style={{ aspectRatio: "1 / 1", width: "min(100%, 640px)", margin: "0 auto" }}>
              <iframe
                src="https://mirza-portfolio-game.vercel.app/"
                title="Portfolio Game"
                tabIndex={-1}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
