import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import AllAboutFunds from "./FooterComponents/AllAboutFunds";
function Footer() {
  return (
    <footer className="footer">

   <div className="socials_copyright">
      <div className="footer__social">
        <h3>Contact me at:</h3>
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
        <button className="fbuttons">Disclaimer</button>
        <button className="fbuttons">Terms and Conditions</button>
        <div className="footer__copyright">
        <p>&copy; 2023 IndexGuru</p>
      </div>
      </div>
      

        <div className="Important_Links">
        <h3>Types of Funds</h3>
      <button className="fbuttons">Equity Mutual Funds</button>
      <button className="fbuttons">Debt Funds</button>
      <button className="fbuttons">ELSS Funds</button>
      <button className="fbuttons">Index Funds</button>
      </div>


      <div className="allaboutFunds">
        <h3>All about Mutual Funds</h3>
      <button className="fbuttons">Mutual Funds</button>
      <button className="fbuttons">Type of mutual funds</button>
      <button className="fbuttons">How to invest in mutual funds</button>
      <button className="fbuttons">Mutual Fund Returns</button>
      <button className="fbuttons">Systematic Investment Plan</button>
      </div>

      <div className="Important_Links">
        <h3>Important Links</h3>
      <button className="fbuttons">Your Questions</button>
      <button className="fbuttons">Videos</button>
      <button className="fbuttons">SIP Calculator</button>
      <button className="fbuttons">LumpSum Calculator</button>
      <button className="fbuttons">Glossary</button>
      </div>


 
    </footer>
  );
}

export default Footer;
