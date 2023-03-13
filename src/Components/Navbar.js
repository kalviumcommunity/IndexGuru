import React from "react";
import "./Navbar.css";
import Logo from "./assets/Logo.png";
import searchButton from "./assets/search-button.png";

export default function Navbar() {

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
