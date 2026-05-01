"use client";
import { useState, useEffect } from "react";

function useTypewriter(text: string, speed = 65, delay = 400) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return displayed;
}

const Hero = () => {
  const name = useTypewriter("Mirza Yousuf");

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="status-badge">
          <span className="status-dot" />
          open to work — may 2026
        </div>

        <p className="hero-prompt">$ whoami</p>

        <h1 className="hero-name" style={{ display: "grid" }}>
          {/* reserves full layout space */}
          <span style={{ visibility: "hidden", gridArea: "1/1" }} aria-hidden="true">
            Mirza Yousuf
          </span>
          {/* typed text overlaid in the same cell */}
          <span style={{ gridArea: "1/1" }}>
            {name}<span className="cursor" />
          </span>
        </h1>

        <p className="hero-subtitle">
          <span className="comment">{"// "}</span>
          <span className="accent">an aspiring software developer</span>
        </p>

        <p className="hero-desc">
          Computer science graduate from Memorial University of Newfoundland.
          Building things across full-stack, cybersecurity, and data science.
        </p>

        <div className="hero-ctas">
          <a href="https://github.com/akurtle" className="btn-primary" target="_blank" rel="noopener noreferrer">
            ◆ GitHub
          </a>
          <a href="#projects" className="btn-ghost">View projects →</a>
          <a href="" className="btn-ghost">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
