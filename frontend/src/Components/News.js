import React, { useEffect } from 'react';

const NewsViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "regular",
      "width": "100%",
      "height": "100%",
      "locale": "in"
    });
    document.getElementById('tradingview-widget-container').appendChild(script);

    return () => {
      document.getElementById('tradingview-widget-container').removeChild(script);
    };
  }, []);

  return (
    <div id="tradingview-widget-container" className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/key-events/" rel="noopener" target="_blank">
          <span className="blue-text">Daily news roundup</span>
        </a> by TradingView
      </div>
    </div>
  );
};

export default NewsViewWidget;
