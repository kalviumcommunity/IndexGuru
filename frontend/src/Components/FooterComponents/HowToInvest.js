import React, { useState } from 'react';
import "./HowToInvest.css";
import InvestF from "../assets/InvestF.jpg";
import InvestX from "../assets/InvestX.jpg";

function HowToInvest() {




  return (
    <>
      <div className='div3'>
        <div className='iframe'>
          <img
            src={InvestF}
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
            How to invest in Mutual Funds
          </h4>
          <p>
            There are several ways to start investing in a <strong style={{color: "#10b983"}}> Mutual Fund scheme.</strong>
            <br /><br />
            One can <strong style={{color: "#10b983"}}>invest in Mutual Funds </strong>by submitting a duly completed application form along with a cheque or bank draft at the branch office or designated Investor Service Centres (ISC) of Mutual Funds or Registrar & Transfer Agents of the respective the Mutual Funds.
            <br /><br />
            One may also choose to invest online through the websites of the respective Mutual Funds.
            <br /><br />
            Further, one may invest with the help of / through a <strong style={{color: "#10b983"}}> financial intermediary</strong> i.e., a Mutual Fund Distributor registered with AMFI OR choose to invest directly i.e., without involving or routing the investment through any distributor.
            <br /><br />
            A Mutual Fund Distributor may be an individual or a non-individual entity, such as bank, brokering house or on-line distribution channel provider.
            <br /><br />
            One can choose to invest online, as platforms these days have all<strong style={{color: "#10b983"}}> necessary safeguards </strong>to ensure secure investing. It is really more a matter of comfort and convenience.
            <br /><br />
          </p>
        </div>
      </div>
    </>
  );
}

export default HowToInvest;
