const Footer = () => {
  return (
    <>
      <section id="contact" className="connect-section">
        <div className="section-inner" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="section-header" style={{ justifyContent: "center" }}>
            <span className="section-num">05</span>
            <h2>Connect</h2>
            <div className="section-line" />
          </div>
          <h2 className="connect-heading">Let&apos;s build something.</h2>
          <p className="connect-sub">
            Open to full-time roles, contracts, and collaborations.
          </p>
          <div className="connect-links">
            <a
              href="https://www.linkedin.com/in/mirza-yousuf-myzab/"
              className="connect-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/akurtle"
              className="connect-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:myzbaig@mun.ca" className="connect-link">
              Gmail
            </a>
            <a href="" className="connect-link">
              Resume
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="site-footer">
          <span className="footer-left">
            {"// "}
            <span className="footer-name">Mirza Yousuf</span>
            {" — built with curiosity"}
          </span>
          <span className="footer-right">© 2026</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
