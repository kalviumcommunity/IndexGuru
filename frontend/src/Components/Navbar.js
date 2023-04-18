
import "./Navbar.css";
import Logo from "../Components/assets/Logo3.png";
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
          <img src={Logo} className="logo" alt="This is my logo" />

         
          <div className="links">
            <Link to="/crypto">
              <button className="buttons">Crypto</button>
            </Link>
            
            <Link to="/explore">
            <button className="buttons"> Explore<FaFeatherAlt/> </button>
            </Link>
            <button className="buttons" onClick={handleDownload} style={{textAlign:"center"}}>Investment Guide <FaDownload/></button>

            <LoginButton />
          </div>
        </div>
        </header>
      
    </>
  );
}
