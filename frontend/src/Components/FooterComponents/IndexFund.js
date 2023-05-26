import React, { useState } from 'react';
import "./HowToInvest.css";
import InvestF from "../assets/InvestF.jpg";
import InvestX from "../assets/InvestX.jpg";
import FundImage from "../assets/InvestZ.jpg"

function IndexFund() {




  return (
    <>
      <div className='div3'>
        <div className='iframe'>
          <img
            src={FundImage}
            alt="Invest in Mutual Funds"
          />
          <div className="credit-container">
            <p className="credit-text">
              Powered by <a className="credit-link" href="https://www.mutualfundssahihai.com/en/what-is-a-mutual-fund">Mutual Fund Sahi Hai</a>
            </p>
          </div>
        </div>

        <div className='description3'>
          <h4 style={{ textAlign: "center", marginBottom: "1.5em", color: "#2196f3", fontSize: "2.5em" }}>
          What are Index Funds?
          </h4>
          <p>
          Index Funds are passive mutual funds that mimic popular market indices. The Fund Manager doesn’t play an active role in selecting industries and stocks to build the fund’s portfolio but simply invests in all the stocks that make up the index to be followed.            <br /><br />
            <br />
            <br />
            The weightage of the stocks in the fund closely matches the weightage of each of the stock in the index. This is passive investment i.e the fund manager simply copies the Index while building the fund’s portfolio and tries to maintain the portfolio in sync with its index at all times.            <br /><br />
            <br />
            <br />
            If the weight of a stock within the index changes, the fund manager must buy or sell units of the stock to have its weight in the portfolio aligned to that of the index. While passive management is easier to follow, the fund doesn’t always produce the same returns as that of the index due to tracking error.            <br /><br />
            <br />
            <br />
            Tracking error occurs because it is always not easy to hold the securities of the index in the same proportion and transaction costs are incurred by the fund in doing so. Despite tracking error, index funds are ideal for those who don’t want to take the risk of investing in mutual funds or individual stocks but would like to gain from exposure to the broader market.
          </p>
        </div>
      </div>
    </>
  );
}

export default IndexFund;
