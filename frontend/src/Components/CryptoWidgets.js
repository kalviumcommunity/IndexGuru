import React, { useEffect, useRef } from 'react';
import "../App.css";

const TradingViewScreener = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    scriptRef.current = document.createElement('script');
    scriptRef.current.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    scriptRef.current.async = true;
    scriptRef.current.innerHTML = JSON.stringify({
      "width": 1300,
      "height": 500,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "light",
      "locale": "in"
    });

    const widgetContainer = document.getElementsByClassName('tradingview-widget-container__widget')[0];
    widgetContainer.appendChild(scriptRef.current);

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewScreener;
