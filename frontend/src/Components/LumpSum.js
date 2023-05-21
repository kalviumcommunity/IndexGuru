import React, { useState, useEffect } from "react";
import { TextField, Typography, Slider } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import "./LumpSum.css";
import { numberToWords } from "number-to-words";

const LumpsumCalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [rateOfInterest, setRateOfInterest] = useState(0);
  const [investmentPeriod, setInvestmentPeriod] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [inputFilled, setInputFilled] = useState(false);

  useEffect(() => {
    if (
      principalAmount !== 0 &&
      rateOfInterest !== 0 &&
      investmentPeriod !== 0
    ) {
      calculateFutureValue();
      setInputFilled(true);
    } else {
      setInputFilled(false);
    }
  }, [principalAmount, rateOfInterest, investmentPeriod]);

  const calculateFutureValue = () => {
    const futureVal =
      principalAmount * Math.pow(1 + rateOfInterest / 100, investmentPeriod);
    setFutureValue(futureVal.toFixed(2)); // Rounded to 2 decimal places
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  const handlePrincipalAmountChange = (event, newValue) => {
    setPrincipalAmount(newValue);
  };

  const handleRateOfInterestChange = (event, newValue) => {
    setRateOfInterest(newValue);
  };

  const handleInvestmentPeriodChange = (event, newValue) => {
    setInvestmentPeriod(newValue);
  };

  const chartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [principalAmount, futureValue - principalAmount],
        backgroundColor: ["#42A5F5", "#10b983"],
      },
    ],
  };

  const convertCurrencyToWords = (amount) => {
    const crore = 10000000;
    const lakh = 100000;
    const thousand = 1000;
  
    const croreAmount = Math.floor(amount / crore);
    const lakhAmount = Math.floor((amount % crore) / lakh);
    const thousandAmount = Math.floor((amount % lakh) / thousand);
    const remainingAmount = Math.floor(amount % thousand);
    const paiseAmount = Math.round((amount - Math.floor(amount)) * 100);
  
    const croreInWords = numberToWords.toWords(croreAmount);
    const lakhInWords = numberToWords.toWords(lakhAmount);
    const thousandInWords = numberToWords.toWords(thousandAmount);
    const remainingInWords = numberToWords.toWords(remainingAmount);
    const paiseInWords = numberToWords.toWords(paiseAmount);
  
    let currencyInWords = "";
    if (croreAmount > 0) {
      currencyInWords += `${croreInWords} crore, `;
    }
    if (lakhAmount > 0) {
      currencyInWords += `${lakhInWords} lakh, `;
    }
    if (thousandAmount > 0) {
      currencyInWords += `${thousandInWords} thousand, `;
    }
    if (remainingAmount > 0) {
      currencyInWords += `${remainingInWords} rupees, `;
    }
    if (paiseAmount > 0) {
      currencyInWords += `${paiseInWords} paise`;
    }
  
    return {
      amount: formatCurrency(amount),
      words: currencyInWords.trim(),
    };
  };
  
  

  return (
    <div className="main_div2">
      <div className="second_div2">
        <div className="textField2">
          <div>
            <TextField
              type="number"
              label="Principal Amount"
              variant="outlined"
              fullWidth
              value={principalAmount === 0 ? "" : principalAmount}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setPrincipalAmount(isNaN(value) ? 0 : value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 38) {
                  // Up arrow key
                  e.preventDefault();
                  setPrincipalAmount((prevAmount) => prevAmount + 1000);
                } else if (e.keyCode === 40) {
                  // Down arrow key
                  e.preventDefault();
                  setPrincipalAmount((prevAmount) => prevAmount - 1000);
                }
              }}
            />

            <Slider
              value={principalAmount}
              onChange={handlePrincipalAmountChange}
              valueLabelDisplay="auto"
              min={10000}
              max={10000000}
              step={500}
            />
          </div>
          <div>
            <TextField
              type="number"
              label="Rate of Interest (%)"
              variant="outlined"
              fullWidth
              value={rateOfInterest === 0 ? "" : rateOfInterest}
              onChange={(e) => setRateOfInterest(parseFloat(e.target.value))}
            />
            <Slider
              value={rateOfInterest}
              onChange={handleRateOfInterestChange}
              valueLabelDisplay="auto"
              min={0}
              max={40}
            />
          </div>
          <div>
            <TextField
              type="number"
              label="Investment Period (in yrs)"
              variant="outlined"
              fullWidth
              value={investmentPeriod === 0 ? "" : investmentPeriod}
              onChange={(e) => setInvestmentPeriod(parseFloat(e.target.value))}
            />

            <Slider
              value={investmentPeriod}
              onChange={handleInvestmentPeriodChange}
              valueLabelDisplay="auto"
              min={1}
              max={50}
              step={1}
            />
          </div>
        </div>
        <div className="graph_div2">
          <div className="dough2">
            {inputFilled ? (
              <Doughnut data={chartData} />
            ) : (
              <Typography variant="body1" align="center">
                Enter the investment details to see the chart.
              </Typography>
            )}
          </div>
          <div className="total_return2">
            <Typography variant="h6" align="center" style={{ color: "#888" }}>
              Total Return
            </Typography>
            {inputFilled && (
              <Typography
                variant="h4"
                align="center"
                style={{ color: "#10b983" }}
              >
                {convertCurrencyToWords(futureValue).amount}
              </Typography>
            )}
            {inputFilled && (
              <Typography variant="subtitle1" align="center">
                <div className="text_currency">
                  {" "}
                  ({convertCurrencyToWords(futureValue).words})
                </div>
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumpsumCalculator;
