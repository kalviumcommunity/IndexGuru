import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";
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
      </div>
      <div className="footer__copyright">
        <p>&copy; 2023 IndexGuru</p>
      </div>
 
    </footer>
  );
}

export default Footer;
