import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import TradingViewScreener from './CryptoWidgets';
import CryptoGraph from './CryptoGraph';
import '../App.css';

function CryptoExplore() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;

  return (
    <div className="crypto-explore-container">
      {isLoading ? ( // Show the loader when isLoading is true
        <div className="loader">
          <RingLoader css={override} size={150} color={'#123abc'} loading={isLoading} />
        </div>
      ) : (
        <div className="marketCap">
          <TradingViewScreener />
          <CryptoGraph />
        </div>
      )}
    </div>
  );
}

export default CryptoExplore;
