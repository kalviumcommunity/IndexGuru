import React, { useState } from 'react';
import { TextField, Button, Typography, Slider } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [rateOfInterest, setRateOfInterest] = useState(0);
  const [investmentPeriod, setInvestmentPeriod] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

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
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
  };

  const handleMonthlyInvestmentChange = (event, newValue) => {
    setMonthlyInvestment(newValue);
  };

  const handleRateOfInterestChange = (event, newValue) => {
    setRateOfInterest(newValue);
    calculateFutureValue(); // Calculate future value when interest rate changes
  };
  

  const handleInvestmentPeriodChange = (event, newValue) => {
    setInvestmentPeriod(newValue);
  };

  const chartData = {
    labels: ['Investment', 'Interest'],
    datasets: [
      {
        data: [monthlyInvestment * investmentPeriod * 12, futureValue - monthlyInvestment * investmentPeriod * 12],
        backgroundColor: ['#66BB6A', '#42A5F5'],
      },
    ],
  };

  return (
    <div className='main_div'>
      {/* <Typography variant="h2" align="center" gutterBottom>
        SIP Calculator
      </Typography> */}
      <div className='second_div'>
        <div className='textField'>
        <div>
          <TextField
            type="number"
            label="Monthly Investment"
            variant="outlined"
            fullWidth
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
          />
          <Slider
            value={monthlyInvestment}
            onChange={handleMonthlyInvestmentChange}
            valueLabelDisplay="auto"
            min={0}
            max={100000}
            step={1000}
          />
        </div>
        <div >
          <TextField
            type="number"
            label="Rate of Interest (%)"
            variant="outlined"
            fullWidth
            value={rateOfInterest}
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
            fullWidth            value={investmentPeriod}
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
        
        <div>
          <Button variant="contained" onClick={calculateFutureValue} fullWidth>
            Calculate
          </Button>
        </div>
        </div>
        <div className='graph_div'>
        <Doughnut data={chartData} />
        </div>
          
        
        <div item xs={12}>
          <Typography variant="h6" align="center">
            Future Value: {formatCurrency(futureValue)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;

