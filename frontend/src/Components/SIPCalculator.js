import React, { useState, useEffect } from "react";
import { TextField, Typography, Slider } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import "./SIPCalculator.css";
import { numberToWords } from "number-to-words";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [rateOfInterest, setRateOfInterest] = useState(0);
  const [investmentPeriod, setInvestmentPeriod] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [inputFilled, setInputFilled] = useState(false);

  useEffect(() => {
    if (
      monthlyInvestment !== 0 &&
      rateOfInterest !== 0 &&
      investmentPeriod !== 0
    ) {
      calculateFutureValue();
      setInputFilled(true);
    } else {
      setInputFilled(false);
    }
  }, [monthlyInvestment, rateOfInterest, investmentPeriod]);

  const calculateFutureValue = () => {
    const periodicRate = rateOfInterest / 100 / 12; // Convert the annual interest rate to monthly
    const totalNumberOfPayments = investmentPeriod * 12; // Convert the investment period to months
    const futureVal =
      monthlyInvestment *
      ((Math.pow(1 + periodicRate, totalNumberOfPayments) - 1) / periodicRate) *
      (1 + periodicRate);
    setFutureValue(futureVal.toFixed(2)); // Rounded to 2 decimal places
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  const handleMonthlyInvestmentChange = (event, newValue) => {
    setMonthlyInvestment(newValue);
  };

  const handleRateOfInterestChange = (event, newValue) => {
    setRateOfInterest(newValue);
  };

  const handleInvestmentPeriodChange = (event, newValue) => {
    setInvestmentPeriod(newValue);
  };

  const chartData = {
    labels: ["Investment", "Interest"],
    datasets: [
      {
        data: [
          monthlyInvestment * investmentPeriod * 12,
          futureValue - monthlyInvestment * investmentPeriod * 12,
        ],
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
    <div className="main_div">
      <div className="second_div">
        <div className="textField">
          <div>
            <TextField
              type="number"
              label="Monthly Investment"
              variant="outlined"
              fullWidth
              value={monthlyInvestment === 0 ? '' : monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
            />
            <Slider
              value={monthlyInvestment}
              onChange={handleMonthlyInvestmentChange}
              valueLabelDisplay="auto"
              min={500}
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
              value={rateOfInterest === 0 ? '' : rateOfInterest}
              onChange={(e) => setRateOfInterest(parseFloat(e.target.value))}
            />
            <Slider
              value={rateOfInterest}
              onChange={handleRateOfInterestChange}
              valueLabelDisplay="auto"
              min={0}
              max={30}
              step={0.5}
            />
          </div>
          <div>
            <TextField
              type="number"
              label="Investment Period (in years)"
              variant="outlined"
              fullWidth
              value={investmentPeriod === 0 ? '' : investmentPeriod}
              onChange={(e) => setInvestmentPeriod(parseFloat(e.target.value))}
            />
            <Slider
              value={investmentPeriod}
              onChange={handleInvestmentPeriodChange}
              valueLabelDisplay="auto"
              min={0}
              max={30}
              step={1}
            />
          </div>
        </div>
        <div className="graph_div1">
          {inputFilled && (
            <div className="dough">
              <Doughnut data={chartData} />
            </div>
          )}
        </div>
        <div className="total_return">
          
            <Typography variant="h6" align="center">
            <span style={{color: "#888"}} >Future Value:</span>   <span style={{color: "#10b983"}}> {convertCurrencyToWords(futureValue).amount}</span>
            </Typography>
            <Typography variant="subtitle1" align="center" className="text_currency">
              {convertCurrencyToWords(futureValue).words}
            </Typography>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
