import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>
          Developed by:
          <a
            className="developer-name"
            href="https://endrias.tech"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Endrias Eshetu
          </a>
        </p>

        <p>
          &copy; {new Date().getFullYear()} Mortgage Calculator. All rights
          reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/EndriasEshetu/Mortgage-calculator-web-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="https://www.linkedin.com/in/endrias-eshetu"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
