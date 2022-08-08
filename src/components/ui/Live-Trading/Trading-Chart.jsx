import React from 'react'
import TradeViewChart from 'react-crypto-chart';
import "./Trading-Chart.css";
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Chart() {


  const [listOfCoins, setListOfCoins] = useState([]);

  // API Magic
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20").then(
        (response) => {
          setListOfCoins(response.data.coins);
        }
      );
  }, []);

  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  let mCap;
  let mVol;
  let Sup;
    listOfCoins.forEach((mapItem) => {
      if (mapItem.id === "ethereum") {
          mCap = mapItem.marketCap;
          mVol = mapItem.volume;
          Sup = mapItem.totalSupply;
      }
  });




  return (
    <div className='trade-container animate__animated animate__fadeInUp'>
        <h1 className='live-stats'> <i className="live-but ri-record-circle-fill"></i> Live Metrics QIVC/BUSD</h1>
      <div className="stats">
        <h1 className='label'>Market Cap: ${currencyFormat(Math.round(mCap/100))}</h1>
        <h1 className='label'>Volume : ${currencyFormat(Math.round(mVol/100))}</h1>
        <h1 className='label'>Total Supply : {currencyFormat(Math.round(Sup/100))} QIVC</h1>
      </div>      

       <TradeViewChart pair="ETHBUSD" 
               className="chart-gap"
               chartLayout={{
                layout: {
                  backgroundColor: '#042447',
                  textColor: '#ffffff',
                },
                timeScale: {
                  borderColor: "#485c7b",
                  timeVisible: true,
                  secondsVisible: false,
              },
              }}
              candleStickConfig={{
                upColor: "#14e025",
                downColor: "#db0428",
                borderDownColor: "#cf304a",
                borderUpColor: "#00c176",
                wickDownColor: "#db0428",
                wickUpColor: "#14e025",
              }}
              
       />
      <button className="create__btn d-flex align-items-center gap-2">
        <i className="but ri-exchange-funds-fill"></i>
        <a target="_blank" rel="noopener noreferrer" href="https://www.binance.com/en/trade/QUICK_BUSD">Trade QIVC</a>
      </button>
    </div>

  )
}

export default Chart