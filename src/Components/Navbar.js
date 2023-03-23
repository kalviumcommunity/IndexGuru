import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./assets/Logo.png";
import Carousel from "./Carousel";
import LoginButton from "./login";
import axios from "axios";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [FundsData, setFundsData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/apis/v1/funds").then((data) => {
      setFundsData(data.data);
    });
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(FundsData);
  };
  return (
    <header className="header">
      <div className="Navbar">
        <img src={Logo} className="logo" alt="This is my logo" />

        <input
          type="text"
          value={search}
          className="search-bar"
          placeholder="Search Your Funds Here"
          onChange={handleChange}
        />
        <div className="search-results">
          {FundsData &&
            FundsData.filter((e) => {
              const searchedTerm = search.toLowerCase().trim();
              const fullName = e.name.toLowerCase();

              return (
                searchedTerm &&
                fullName.startsWith(searchedTerm) &&
                fullName !== searchedTerm
              );
            }).map((funds) => {
              return <p key={funds._id}>{funds.name}</p>;
            })}
        </div>
        <div className="links">
          <button className="buttons">About</button>
          <button className="buttons">Documents</button>
          <LoginButton />
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
