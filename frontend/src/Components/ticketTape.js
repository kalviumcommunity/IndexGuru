import React, { useEffect } from "react";

const TicketViewWidget = () => {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { 
            description: "BitCoin", 
          proName: "BITSTAMP:BTCUSD" 
        },
          { 
            description: "Ethereum", 
          proName: "FOREXCOM:ETHUSD"
         },
          {
             description: "USD Coin", 
          proName: "BITSTAMP:USDCUSD" 
        },
          { description: "Cardano", 
          proName: "BITSTAMP:ADAUSD" 
        },
          { 
            description: "Polygon", 
          proName: "BITSTAMP:MATICUSD"
         },
          { 
            description: "Dogecoin", 
          proName: "BITSTAMP:DOGEUSD" 
        },
          { 
            description: "XRP", 
          proName: "BITSTAMP:XRPUSD" 
        },
          { 
            description: "Solana", 
          proName: "BITSTAMP:SOLUSD"
         },
          { 
            description: "Polkadot", 
          proName: "BITSTAMP:DOTUSD" 
        },
          { 
            description: "TRON", 
          proName: "BITFINEX:TRXUSD" 
        },
          { 
            description: "Binance USD", 
          proName: "BINANCE:BNBBUSD" 
        },
          { 
            description: "Litecoin",
           proName: "BITSTAMP:LTCUSD" 
        },
          { 
            description: "Shiba Inu", 
          proName: "BITSTAMP:SHIBUSD" 
        },
          { 
            description: "Avalanche",
           proName: "BITSTAMP:AVAXUSD" },
          { 

            description: "Dai",
           proName: "BITSTAMP:DAIUSD" 
        },
          { 
            description: "Wrapped Bitcoin", 
          proName: "BITFINEX:WBTUSD" 
        },
          {
             description: "Uniswap", 
          proName: "BITSTAMP:UNIUSD" 
        },
        ],
        showSymbolLogo: true,
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en",
      });

      const container = document.getElementById("tradingview-widget-container");
      if (container) {
        container.appendChild(script);
      } else {
        console.warn("Could not find tradingview-widget-container element.");
      }

      return () => {
        const container = document.getElementById(
          "tradingview-widget-container"
        );
        if (container) {
          container.removeChild(script);
        }
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
     <div id="tradingview-widget-container"></div>

    </div>
  );
};

export default TicketViewWidget;
