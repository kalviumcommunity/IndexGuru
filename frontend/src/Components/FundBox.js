import "../App.css";

export default function FundBox(props) {
  const { fundItem } = props;

  return (
    <>
      <div className="heading0">
        <h1 className="fund-name">
          {fundItem === null ? "SBI" : fundItem.name}
        </h1>
      </div>
      <div className="graph">
        <div className="information">
          <div className="NAV">
            <span>NAV</span>
            <br />
            <span>{fundItem === null ? 500 : fundItem.current_nav}</span>
          </div>
          <div className="RATING">
            <span id="aum">Rating</span> <br />
            <span id="aum-data">{fundItem === null ? 4 : fundItem.rating}</span>
          </div>
          <div className="TER">
            <span id="ter">TER</span> <br />
            <span id="ter-data">
              {fundItem === null ? "0.18%" : fundItem.ter.toString() + "%"}
            </span>
          </div>
          <div className="CATEGORY">
            <span id="rating">Category</span> <br />
            <span id="rating-data">
              {fundItem === null ? "Sectorial" : fundItem.category}
            </span>
          </div>
        </div>
      </div>
      {/* The investments div start here  */}
     
      <div className="stats">
        <div className="stats-heading">Had you invested</div>
        <div className="priciple">100000</div>
        <div className="over"> Over the last year</div>
        <div className="rainbow-box ">
          <div className="selection" id="button1">
            1Y
          </div>
          <div className="selection" id="button2">
            3Y
          </div>
          <div className="selection" id="button3">
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
