import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FundBox from "./FundBox";
import Carousel from "./Carousel";
import "../App.css";
import Typewriter from "typewriter-effect";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [FundsData, setFundsData] = useState(null);
  const [fund, setFund] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then((resp) => {
      setFundsData(resp.data);
      console.log(resp.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="search-carousel">
        <div className="justSearch">
          <input
            type="text"
            value={search}
            className="search-bar"
            placeholder="Click here to look for your funds..."
            onChange={handleChange}
          />
          <span className="typewriter">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "To explore all the funds go to our explore page",
                  "To know more about mutual fund click on the docs",
                ],
              }}
            />
          </span>
        </div>

        <div className="search-results" id="search-result-holder">
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
        <div></div>
        <Carousel />
      </div>
      <FundBox fundItem={fund} />
    </>
  );
}

export default SearchBar;
