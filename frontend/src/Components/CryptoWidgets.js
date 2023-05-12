import React, { useEffect } from 'react';
import "../App.css";

const TradingViewScreener = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": 1500,
      "height": 690,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "light",
      "locale": "in"
    });

    const widgetContainer = document.getElementsByClassName('tradingview-widget-container__widget')[0];
    widgetContainer.appendChild(script);

    return () => {
      widgetContainer.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewScreener;
