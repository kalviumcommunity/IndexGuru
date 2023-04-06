import React from "react";
import "./About.css";
import BitCoin from "./images/bitcoin2.png";
import fund from "./images/ruppee.jpg";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="main">
        <div
          className="Bitcoin"
          style={{ backgroundImage: `url(${BitCoin})` }}
        ></div>
        <div className="fund" style={{ backgroundImage: `url(${fund})` }}></div>
      </div>
      <div className="overlay"></div>
      <div className="modal">
        <h1 className="heading">About us</h1>
        <p className="about">
          Welcome to my Index Guru, your one-stop destination for all your
          mutual funds and crypto investment needs. We understand that making
          informed investment decisions can be a daunting task, especially when
          it comes to mutual funds and cryptocurrencies. That's why we created
          this platform to provide you with the most up-to-date data on mutual
          funds and cryptocurrencies to help you make informed investment
          decisions. Our website is designed to give you an in-depth analysis of
          mutual funds and cryptocurrencies.
          <br /> I am commited on providing you with reliable and accurate
          information to help you navigate the investment landscape. My platform
          has been designed to give you an unbiased comparison of different
          mutual funds and cryptocurrencies, so you can choose the best one for
          your investment goals.
          <br /> Our website is user-friendly, and you can easily navigate
          through different pages to find the information you need. Whether you
          are a seasoned investor or a beginner, my website is the perfect place
          to start your investment journey. We offer comprehensive data on
          mutual funds and cryptocurrencies, which includes historical
          performance, current market trends, and future projections.
          <br /> My platform also provides you with the latest news and analysis
          on the financial markets, helping you stay informed and make better
          investment decisions. At our website, we are committed to helping you
          achieve your financial goals. Whether you want to invest in mutual
          funds or cryptocurrencies, we have the data and analysis to help you
          make an informed decision.
          <br />I am looking forward to providing my users with the data that
          they are looking for and helping them acheive their future investments
          goals. I urge my users to understand that this website was built by me
          and is being maintained by me so for any bugs or problems the users
          come across kindly reach out to me to the different platform provided
          on the contact us page.
          <h3>Funky Funding</h3>
        </p>
        <Footer/>
      </div>
    </>
  );
}

export default About;
