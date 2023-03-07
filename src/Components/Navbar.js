import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "./assets/Logo.png";
import searchButton from "./assets/search-button.png";
export default function Navbar() {
  // const handleClick = (e) => {
  //   let button = document.getElementsByClassName("buttons");
  //   for (let i = 0; i < button.length; i++) {
  //     if (button[i].hasAttribute("id", "active")) {
  //       button[i].removeAttribute("id", "active");
  //     }
  //   }
  //   e.target.setAttribute("id", "active");
  // };
  const [imgNo, setImgNo] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (imgNo === 10) {
        setImgNo(0);
      } else if (imgNo >= 0 && imgNo < 10) {
        setImgNo(imgNo + 1);
      }
    }, 3000);
  });

  return (
    <header className="header">
      <div className="Navbar">
        <img src={Logo} className="logo" alt="This is my logo" />
        <div className="searchBarHolder">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Your Funds Here "
          />
          <span>
            <img
              src={searchButton}
              className="search-icon"
              height={20}
              alt="button"
            />
          </span>
        </div>
        <div className="links">
          <button className="buttons">Log In</button>
          <button className="buttons">Sign Up</button>
          <button className="buttons">About</button>
        </div>
      </div>
      <div className="funk-container">
        <span className="funky">
          Funky <br />
          Funding
        </span>
      </div>
    </header>
  );
}
