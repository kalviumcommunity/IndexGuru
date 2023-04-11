
import "./Navbar.css";
import Logo from "../Components/assets/Logo3.png";
import LoginButton from "./login";
import { Link } from "react-router-dom";

export default function Navbar() {



  return (
    <>
      <header className="header">
        <div className="Navbar">
          <img src={Logo} className="logo" alt="This is my logo" />

         
          <div className="links">
            <Link to="/crypto">
              <button className="buttons">Crypto</button>
            </Link>
            <button className="buttons">Docs</button>
            <Link to="/explore">
            <button className="buttons"> Explore </button>
            </Link>
            <LoginButton />
          </div>
        </div>
        </header>
   
    </>
  );
}
