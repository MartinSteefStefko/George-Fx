import React from 'react'
import './CountryItem.css'

const CountryItem = ({ flag, name, nameI18N, price, symbol }) => {
  return (
    <div className="country-container">
      <div className="country-row">
        <div className="country">
          {/* <img src={image} alt="crypto" /> */}
          <img src={`flags/${flag}`} alt={flag} />
          <h1 className="country-name">{name}</h1>
        </div>
        <div className="currency-data">
          <p className="currency-symbol">{symbol}</p>
          <p>{nameI18N}</p>
          <p className="currency-price">€{price}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryItem
