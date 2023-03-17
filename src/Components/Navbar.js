import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./assets/Logo.png";
import searchButton from "./assets/search-button.png";
import Carousel from "./Carousel";

export default function Navbar() {
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  document.addEventListener("keypress", (e) => {
    if (e.target === "enter") {
      document.getElementById("search-button").click();
    }
    console.log(search);
  });
  const [search, setSearch] = useState("");
  return (
    <header className="header">
      <div className="Navbar">
        <img src={Logo} className="logo" alt="This is my logo" />
        <div className="searchBarHolder">
          <input
            type="text"
            value={search}
            className="search-bar"
            placeholder="Search Your Funds Here"
            onChange={handleChange}
          />
          <span>
            <img
              src={searchButton}
              className="search-icon"
              height={20}
              id="search-button"
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
        <Carousel />
      </div>
    </header>
  );
}
