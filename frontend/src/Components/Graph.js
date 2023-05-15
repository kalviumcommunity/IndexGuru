// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';
import "../App.css";
let tvScriptLoadingPromise;

export default function TicketViewWidget() {
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
        if (document.getElementById('tradingview_6b9c4') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NIFTYBEES",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_6b9c4"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container2'>
      <div id='tradingview_6b9c4' />
    </div>
  );
}
