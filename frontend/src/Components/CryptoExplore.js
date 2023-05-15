import React from 'react'
import TradingViewScreener from './CryptoWidgets'
import CryptoGraph from './CryptoGraph'
import "../App.css"


function CryptoExplore() {
  return (
    <>
    <div className='marketCap'>
        <TradingViewScreener/>
        <CryptoGraph/>
    </div>
    </>
  )
}

export default CryptoExplore