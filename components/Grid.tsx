"use client";
import { useState } from "react";
import Image from "next/image";

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
  const [gameOpen, setGameOpen] = useState(false);

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
              <Image
                src="/myImage.webp"
                alt="Mirza Yousuf"
                fill
                style={{ objectFit: "cover", objectPosition: "left center", filter: "grayscale(20%) contrast(1.05)" }}
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
              <span className="str">&quot;graduated&quot;</span>
              {": "}
              <span className="str">&quot;Aug 2025&quot;</span>
              {","}
              <br />
              {"  "}
              <span className="str">&quot;openToWork&quot;</span>
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

        {/* Embedded game — Linux desktop */}
        <div
          style={{
            marginTop: "24px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            backgroundImage: "url('/UbuntuMain.png')",
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          {/* Ubuntu top panel — replaces bare wallpaper gap at top */}
          <div
            style={{
              background: "rgba(20,20,20,0.92)",
              backdropFilter: "blur(4px)",
              padding: "5px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "#ccc" }}>Activities</span>
            <span style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "#ccc" }}>
              {new Date().toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric" })}
            </span>
            <span style={{ fontSize: "12px", color: "#ccc" }}>⏻</span>
          </div>

          {/* Desktop area */}
          <div style={{ padding: "24px 32px 32px", display: "flex", justifyContent: "center" }}>
            {/* Linux window chrome */}
            <div
              style={{
                width: "min(100%, 640px)",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Window title bar */}
              <div
                style={{
                  background: "#2d2d2d",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  userSelect: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.4)",
                }}
              >
                <span style={{ fontFamily: "var(--sans)", fontSize: "12px", color: "#ccc", flex: 1 }}>
                  portfolio-game
                </span>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f4bf75", display: "inline-block" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ac4142", display: "inline-block" }} />
              </div>

              {/* Game area */}
              <div style={{ aspectRatio: "1 / 1", position: "relative", background: "#000" }}>
                {gameOpen ? (
                  <iframe
                    src="https://mirza-portfolio-game.vercel.app/"
                    title="Portfolio Game"
                    tabIndex={-1}
                    style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                    allow="autoplay"
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <p style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--text2)", margin: 0 }}>
                      {"// explore my portfolio through a 2D space game"}
                    </p>
                    <button className="btn-primary" onClick={() => setGameOpen(true)}>
                      ▶ play game
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
