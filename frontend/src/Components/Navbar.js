
import "./Navbar.css";
import Logo from "../Components/assets/logo3.jpeg";
import LoginButton from "./login";
import { Link } from "react-router-dom";
import docsPDF from "./assets/Investment Guide.pdf"
import { FaDownload } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";



export default function Navbar() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = docsPDF; 
    link.download = 'Investment Guide.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <>
      <header className="header">
        <div className="Navbar">
          <Link to="/" className="logo_container">
          <img className="logo" src={Logo}  alt="This is my logo" />
          </Link>

         
          <div className="links">
            <Link to="/crypto">
              <button className="buttons">Explore Crypto</button>
            </Link>

            <Link to="/explorecrypto">
            <button className="buttons">Crypto Insights </button>
            </Link>

            
            <Link to="/explore">
            <button className="buttons"> Explore Mutual Funds<FaFeatherAlt/> </button>
            </Link>

            <Link to="/SIPCalculator">
            <button className="buttons">SIP Calculator </button>
            </Link>

            
            <Link to="/LumpsumCalculator">
            <button className="buttons">Lumpsun Calculator</button>
            </Link>
           
            <button id="guide" className="buttons" onClick={handleDownload} style={{textAlign:"center"}}>Investment Guide <FaDownload/></button>

            <LoginButton />
          </div>
        </div>
        </header>
      
      
    </>
  );
}
