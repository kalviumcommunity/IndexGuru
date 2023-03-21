import React from "react";
import "../App.css";

export default function FundBox() {
  return (
    <>
      <div className="heading0">
        <h1 className="heading">SBI Nifty Index Growth Direct Plan</h1>
      </div>
      <div className="graph">
        <div className="information">
          <div className="NAV">
            <span>NAV</span>
            <br />
            <span>10000000</span>
          </div>
          <div className="AUM">
            <span id="aum">AUM</span> <br />
            <span id="aum-data">1.6cr </span>
          </div>
          <div className="TER">
            <span id="ter">TER</span> <br />
            <span id="ter-data"> 0.18%</span>
          </div>
          <div className="RATING">
            <span id="rating">Category</span> <br />
            <span id="rating-data">Sectorial</span>
          </div>
        </div>
      </div>
      {/* The investments div start here  */}
      <div className="stats">
        <div className="stats-heading">Had you invested</div>
        <div className="priciple" contentEditable={true}>
          100000
        </div>
        <div className="over"> Over the last year</div>
        <div className="rainbow-box ">
          <div className="buttons2" id="button1">
            1Y
          </div>
          <div className="buttons2" id="button2">
            3Y
          </div>
          <div className="buttons2" id="button3">
            ALL
          </div>
        </div>
      </div>

      <div className="returns">
        <span className="heading1">Your returns would have been </span>
        <div className="return-box">
          <div className="three-fields">SBI Nifty 50</div>
          <div className="three-fields">Fixed Deposite</div>
          <div className="three-fields">Banking Saving</div>
        </div>
      </div>
    </>
  );
}
