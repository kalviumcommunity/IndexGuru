import React from "react";
import "../App.css";

export default function FundBox() {
  return (
    <>
      <div>
        <h1 className="heading">SBI Nifty Index Grwoth Direct Plan</h1>
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
            <span id="rating">Rating</span> <br />
            <span id="rating-data">************</span>
          </div>
        </div>
      </div>
      {/* The investments div start here  */}
      <div className="stats">
        <div className="stats-heading">Had you invested</div>
        <div className="priciple">100000</div>
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
    </>
  );
}
