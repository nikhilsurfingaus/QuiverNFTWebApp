import React from 'react'
import TradeViewChart from 'react-crypto-chart';
import "./Trading-Chart.css";

function Chart() {
  return (
    <div className='trade-container'>
      <h1 className='label' >QIVC/BUSD</h1>
       <TradeViewChart pair="ETHBUSD" 
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
      <button className=" create__btn d-flex align-items-center gap-2">
        <i className="but ri-exchange-funds-fill"></i>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/WaveFlightSimulations">Trade QIVC</a>
      </button>
    </div>

  )
}

export default Chart