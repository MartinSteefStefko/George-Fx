import React from 'react'
import './CurrencyItem.css'

const CurrencyItem = ({ name, price, symbol }) => {
  return (
    <div className="currency-container">
      <div className="currency-row">
        <div className="currency">
          {/* <img src={image} alt="crypto" /> */}
          <h1>{name}</h1>
          <p className="currency-symbol">{symbol}</p>
        </div>
        <div className="currency-data">
          <p className="currency-price">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrencyItem