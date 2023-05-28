import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import docsPDF from "./assets/Investment Guide.pdf"
import logo from "../Components/assets/logo4.jpeg"
function Footer() {


    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = docsPDF; 
      link.download = 'Investment Guide.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <footer className="footer">
      <div className="socials_copyright">
        <div className="footer__social">
          <h3 className="contact">Contact me at:</h3>
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
        <div>
          <img src={logo} alt=""  className="logo"/>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 IndexGuru</p>
        </div>
      </div>
      
      
      <div className="links_container">
      <div className="Important_Links">
        <h3 style={{color: "#10b983"}}>Types of Funds</h3>
        <Link to={"/equity"}>
        <button className="fbuttons">Equity Mutual Funds</button>
        </Link>
        <Link to={"/debt"}>
        <button className="fbuttons">Debt Funds</button>
        </Link>
        <Link to={"/elss"}>
        <button className="fbuttons">ELSS Funds</button>
        </Link>
        <Link to={"/index-fund"}>
        <button className="fbuttons">Index Funds</button>
        </Link>
        <button id="guide" className="fbuttons" onClick={handleDownload} style={{textAlign:"center"}}>Investment Guide <FaDownload/></button>
        
      </div>



      <div className="allaboutFunds">
        <h3 style={{color: "#10b983"}}>All about Mutual Funds</h3>
        <Link to={"/mutualFunds"}>
          {" "}
          <button className="fbuttons">Mutual Funds</button>{" "}
        </Link>
        <Link to={"/typesOfFunds"}>
        <button className="fbuttons">Type of mutual funds</button>
        </Link>
        <Link to={"/howToInvest"}> 
        <button className="fbuttons">How to invest in mutual funds</button>
        </Link>
        <Link to={"/mutualFundsReturns"}>
        <button className="fbuttons">Mutual Fund Returns</button>
        </Link>
        <Link to={"/investmentPlan"}>
        <button className="fbuttons">Systematic Investment Plan</button>
        </Link>
      </div>
    

      
      
      <div className="Important_Links">
        <h3 style={{color: "#10b983"}}>Important Links</h3>
        <Link to={"/questions"}>
        <button className="fbuttons">Your Questions</button>
        </Link>
        <Link to={"/videos"}><button className="fbuttons">Videos</button></Link>
        
        <Link to="/sipcalculator">  <button className="fbuttons">SIP Calculator</button> </Link>
      
        <Link to="/lumpsumCalculator"><button className="fbuttons">LumpSum Calculator</button></Link>
        
      
      </div>
      </div>
    </footer>
  );
}

export default Footer;
