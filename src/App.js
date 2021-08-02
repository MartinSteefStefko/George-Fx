import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrencyItem from './CurrencyItem'
import { countryToCurrency } from './constants/countryToCurrency'

function App() {
  const [currency, setCurrency] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343')
      .then((res) => {
        console.log(res.data.fx)
        setCurrency(res.data.fx)
        // console.log(currency)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  // console.log('Country of USD', getKeyByValue(countryToCurrency, 'USD'))

  const filteredCurrency = currency.filter(
    (currency) =>
      currency.currency &&
      currency.nameI18N &&
      currency.exchangeRate &&
      currency.currency.toLowerCase().includes(search.toLowerCase())

    // currency.nameI18N.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="currency-app">
      <h1 className="currency-text">George FE Test</h1>
      <p className="currency-text">Search a currency</p>
      <div className={'currency-search'}>
        <form>
          <input
            className="currency-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
        {/* </div> */}
      </div>
      {filteredCurrency.map((currency) => {
        return (
          <CurrencyItem
            key={currency.currency}
            name={currency.nameI18N}
            price={currency.exchangeRate.middle}
            symbol={currency.currency}
          />
        )
      })}
    </div>
  )
}

export default App
