import React from "react";
import "./Footer.css";
import emailicon from "../../assets/icons/email.svg";
import githubicon from "../../assets/icons/github.svg";
import mylogo from "../../assets/icons/logo.png";
import linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-images">
        <a href="mailto:vmharish@asu.edu">
          <img src={emailicon} className="email-icon" alt="Email" />
        </a>
        <a
          href="https://github.com/sqVish99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubicon} className="github-icon" alt="GitHub" />
        </a>
        <a
          href="https://sqvish99.github.io/vishwas-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mylogo} className="my-logo" alt="My Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishwas-m-h/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="linkedin-icon" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
