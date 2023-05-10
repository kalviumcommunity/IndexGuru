import "../App.css";
import { useState } from "react";
import Spline from '@splinetool/react-spline';
import TradingViewWidget from "./Graph";
import Rating from '@mui/material/Rating';

export default function FundBox(props) {
  const { fundItem } = props;
  const [input, setInput] = useState(10000);
  const [totalAmount, setTotalAmount] = useState({
    one_year: 0,
    three_year: 0,
    one_day: 0,
  });

  const calculateCompoundInterest = () => {
    const p = parseFloat(input);
    const r = parseFloat(fundItem.one_year_return) / 100;
    const n = parseInt(1);
    const total = p * Math.pow(1 + r, n);
    console.log(fundItem.one_year_return);
    setTotalAmount({ ...totalAmount, one_year: total.toFixed(2) });
  };

  const calculateCompoundInterest3 = () => {
    const p = parseFloat(input);
    const r = parseFloat(fundItem.three_year_return) / 100;
    const n = parseInt(1);
    const total = p * Math.pow(1 + r, n);
    console.log(fundItem.three_year_return);
    setTotalAmount({ ...totalAmount, three_year: total.toFixed(2) });
  };

  const calculateCompoundInterest4 = () => {
    const p = parseFloat(input);
    const r = parseFloat(fundItem.one_day_return) / 100;
    const n = parseInt(1);
    const total = p * Math.pow(1 + r, n);
    console.log(fundItem.three_year_return);
    setTotalAmount({ ...totalAmount, one_day: total.toFixed(2) });
  };

  return (
    <>
      <div className="fundboxContainer">
        {fundItem === null ? (
          <div>
           <Spline scene="https://prod.spline.design/pc5sxvD0mNs80Pb3/scene.splinecode"
            style={{height:"800px"}}
            />
            
          </div>
        ) : (
          <div className="card-div">
            <h1 >{fundItem.name}</h1>
            <div className="NAV">
              <h2 style={{"color": "#888"}}>Current NAV</h2>
              <div> <span className="current_nav" style={{"fontWeight": 600}}> ₹{fundItem.current_nav}</span> <span>{
                fundItem.one_day_return>0? <span style={{"color": "#10b983"}}> +{fundItem.one_day_return}</span>: <span style={{"color": "red"}}>{fundItem.one_day_return}</span>
                }</span> </div>
                <div> <Rating name="read-only" value={fundItem.rating} defaultValue={0}  size="large"  readOnly/> </div>
               </div>

               <div className="short_name" ><h1 style={{"color": "#888"}}>{fundItem.short_name}</h1>
               <div className="fund_details"> <span className="fund_stats">Category: </span> <h2 style={{"color": "#2196f3"}}>{fundItem.category}</h2> </div>
               <div className="fund_details"> <span className="fund_stats">Sub-Category: </span> <h2 style={{"color": "#2196f3"}}>{fundItem.sub_category}</h2> </div>
               <div className="fund_details"> <span className="fund_stats">Scheme Plan: </span> <h2 style={{"color": "#2196f3"}}>{fundItem.scheme_plan} </h2></div>
               </div>


               <div className="return_values">

                <div className="fund_returns"> <span>One Year Return: </span> <span>{fundItem.one_year_return}</span></div>
                <div className="fund_returns"> <span>Three Year Return: </span> <span>{fundItem.three_year_return}</span></div>
                <div className="fund_returns"> <span>One Day Return</span> <span>{fundItem.one_day_return}</span></div>
                <div className="fund_returns"> <span>TER</span> <span>{fundItem.ter}%</span></div>

                </div>


                
                
               

              
            
            </div>
        )}

          {/* Graph */}

        <TradingViewWidget/>
       
        {/* The investments div start here  */}
    
        <div className="stats">
          <div className="stats-heading">Had you invested</div>
          <div className="priciple">
           
            <input
              className="principleAmount"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="button-box">
            <div className="over"> Over the last:</div>
            <div
              className="selection"
              id="button1"
              onClick={calculateCompoundInterest4}
            >
              1D
            </div>
            <div
              className="selection"
              id="button1"
              onClick={calculateCompoundInterest}
            >
              1Y
            </div>
            <div
              className="selection"
              id="button2"
              onClick={calculateCompoundInterest3}
            >
              3Y
            </div>
          </div>
        </div>

        <div className="returns">
          <span className="heading1">Your returns would have been </span>
          <div className="return-box">
            <div className="three-fields">
              {fundItem === null
                ? "SBI Nifty 50"
                : `${fundItem.short_name} [1Y]`}
              : <span className="valueReturns"> {totalAmount.one_year} </span>
            </div>
            <div className="three-fields">
              {fundItem === null
                ? "SBI Nifty 50"
                : `${fundItem.short_name} [3Y]`}
              : <span className="valueReturns"> {totalAmount.three_year} </span>
            </div>
            <div className="three-fields">
              {fundItem === null
                ? "SBI Nifty 50"
                : `${fundItem.short_name} [1D]`}
              : <span className="valueReturns"> {totalAmount.one_day} </span>
            </div>
 
          </div>
        </div>
      </div>
    </>
  );
}



{/* <div className="flex-div">  
<div>
  <h1 className="fund-name">
   {fundItem.name}
  </h1>
</div>
<div className="fund-stats short_name"><span className="stats-topics">Short Name</span>  <span className="stats-value"> {fundItem.short_name}</span></div>
<div className="fund-stats category"> <span className="stats-topics">Category </span> <span className="stats-value">{fundItem.category}</span></div>
<div className="fund-stats sub_category"><span className="stats-topics">Sub Category</span>  <span className="stats-value">{fundItem.sub_category}</span></div>

<div className="fund-stats scheme_plan"> <span className="stats-topics">Scheme Plan</span>  <span className="stats-value">{fundItem.scheme_plan}</span></div>
<div className="fund-stats current_nav"> <span className="stats-topics">Net Asset Value</span>  <span className="stats-value">{fundItem.current_nav}</span></div>
<div className="fund-stats one_year_return"><span className="stats-topics">One Year Return</span>  <span className="stats-value">{fundItem.one_year_return}</span></div>
<div className="fund-stats three_year_return"><span className="stats-topics">Three Year Return</span>  <span className="stats-value"> {fundItem.three_year_return}</span></div>
<div className="fund-stats rating"><span className="stats-topics">Rating </span>  <span className="stats-value">{fundItem.rating}</span></div>
<div className="fund-stats ter"><span className="stats-topics">TER</span>  <span className="stats-value">{fundItem.ter}</span></div>


  </div> */}