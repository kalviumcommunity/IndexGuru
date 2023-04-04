import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./assets/Logo.png";
import Carousel from "./Carousel";
import LoginButton from "./login";
import axios from "axios";
import FundBox from "./FundBox";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [FundsData, setFundsData] = useState(null);
  const [fund, setFund] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/apis/v1/funds").then((resp) => {
      setFundsData(resp.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
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

                return searchedTerm && fullName.startsWith(searchedTerm);
              }).map((funds) => {
                return (
                  <p
                    key={funds._id}
                    onClick={() => {
                      setFund(funds);
                    }}
                  >
                    {funds.name}
                  </p>
                );
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
      <FundBox fundItem={fund} />
    </>
  );
}
