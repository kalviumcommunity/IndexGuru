import "../App.css";
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import Rating from '@mui/material/Rating';
import Chart from "chart.js/auto";
import { registerables } from "chart.js";
import { Line } from 'react-chartjs-2';


export default function FundBox(props) {
  const { fundItem } = props;
  const [input, setInput] = useState(10000);
  const [totalAmount, setTotalAmount] = useState({
    one_year: 0,
    three_year: 0,
    one_day: 0,
  });


  /*Graph Code*/

  const [navData, setNavData] = useState([]);
  useEffect(() => {
    if (fundItem && fundItem.unique_fund_code) {
      const fetchNavData = async () => {
        const response = await fetch(`https://api.kuvera.in/mf/api/v6/fund_navs/${fundItem.unique_fund_code}.json?v=1.211.0`);
        const data = await response.json();
        setNavData(data.slice(-30));
      };
      fetchNavData();
    }
  }, [fundItem]);
  

  const navValues = navData.map((dataPoint) => dataPoint[1]);       

  const daysToShow = 30;
  const dateLabels = Array.from({ length: daysToShow }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (daysToShow - i - 1));
    return date.toLocaleDateString();
  });

  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: fundItem ? fundItem.name : 'NAV',
  
        data: navValues,
        fill: false,
        radius: 5,
        pointBackgroundColor: "white",
        
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'NAV',
            fontSize: 40,
         
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
       
      
      },

    },
    width: 600,
    height: 800,
  };
  


  

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
            style={{height:"600px"}}
            />
            
          </div>
        ) : (
          <div className="card-div">
            <div className="fund_details_graph">
            <h1 style={{"marginLeft": 20, "marginTop":25}}>{fundItem.name}</h1>
            <div className="NAV">
              <h2 style={{"color": "#888", "fontSize": "1.5rem"}}>Current NAV</h2>
              <div> <span className="current_nav" style={{"fontWeight": 600,  "fontSize": "1.8rem"}}> ₹{fundItem.current_nav}</span> <span>{
                fundItem.one_day_return>0? <span style={{"color": "#10b983"}}> +{fundItem.one_day_return}</span>: <span style={{"color": "red"}}>{fundItem.one_day_return}</span>
                }</span> </div>
                <div> <Rating name="read-only" value={fundItem.rating} defaultValue={0}  size="large"  readOnly/> </div>
               </div>

               <div className="short_name" ><h1 style={{"color": "#888", "textAlign":"center"}}>{fundItem.short_name}</h1>
               <div className="fund_details"> <span className="fund_stats">Category: </span> <h3 style={{"color": "#2196f3"}}>{fundItem.category}</h3> </div>
               <div className="fund_details"> <span className="fund_stats">Sub-Category: </span> <h3 style={{"color": "#2196f3"}}>{fundItem.sub_category}</h3> </div>
               <div className="fund_details"> <span className="fund_stats">Scheme Plan: </span> <h3 style={{"color": "#2196f3"}}>{fundItem.scheme_plan} </h3></div>
             


               

                <div className="fund_returns"> <span className="return_parameters">One Year Return: </span> <span className="return_per">{fundItem.one_year_return}</span></div>
                <div className="fund_returns"> <span className="return_parameters">Three Year Return: </span> <span className="return_per">{fundItem.three_year_return}</span></div>
                <div className="fund_returns"> <span className="return_parameters">One Day Return:</span> <span  className="return_per">{fundItem.one_day_return}</span></div>
                <div className="fund_returns"> <span className="return_parameters">Total Expense Ratio:</span> <span className="return_per">{fundItem.ter}%</span></div>
                </div>
                </div>

                <div className="graph_div">
                {/* <TradingViewWidget/> */}
                <Line
                 data={chartData} 
                 options={options}
                  className="fund_graph"
                  width="1000"
                  height="500"

                   />
                </div>


                
                
               

              
            
            </div>
        )}

          

    
       
        {/* The investments div start here  */}
    
        <div className="stats">
          <div className="stats-heading">Calculate your Returns for
         <h6 className="stats-heading_sub_heading"> {fundItem === null
                ? <span>"Selected Fund"</span>
                : `${fundItem.short_name}`}
                </h6>
         
          </div>
          <div className="principle_main">
          <div className="priciple">
           <span>Enter your Principle Amount</span>
            <input
              className="principleAmount"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="button-box">
            <div className="over"> Select Time Period</div>
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