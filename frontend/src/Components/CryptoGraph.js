// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function CryptoGraph() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_5feea') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 1500,
            height: 690,
            symbol: "BITSTAMP:BTCUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "3",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_5feea"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container1'>
      <div id='tradingview_5feea' />
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets</span></a> on TradingView
      </div>
    </div>
  );
}
