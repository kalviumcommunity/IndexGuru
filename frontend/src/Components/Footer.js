import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Terms from "./Terms";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://github.com/AnjaniKumar1515"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anjani-kumar-rai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/wisteria.fall_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer__links">
        <Link to="/about">
          <p>About</p>
        </Link>

        <Terms /> 

        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2023 IndexGuru</p>
      </div>
    </footer>
  );
}

export default Footer;
