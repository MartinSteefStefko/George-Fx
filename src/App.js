import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CountryItem from './components/CountryItem'
import SearchBar from './components/SearchBar'
import { transformFx } from './helpers/transformFx'

function App() {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343')
      .then((res) => {
        setCountry(transformFx(res.data.fx))
        console.log('country', country)
      }, [])
      .catch((error) => console.log(error))
  })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCountry = country.filter(
    (country) =>
      country.currency &&
      country.apiData &&
      country.currency.toLowerCase().includes(search.toLowerCase())

    // currency.nameI18N.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="currency-app">
      <h1 className="currency-text">George FE Test</h1>
      <p className="currency-text">Search a currency</p>
      <SearchBar onHandleChange={handleChange} />
      {filteredCountry.map((country) => {
        return (
          <CountryItem
            key={country.name}
            flag={country.flag}
            name={country.name}
            nameI18N={country.apiData.nameI18N}
            price={country.apiData.exchangeRate.middle}
            symbol={country.currency}
          />
        )
      })}
    </div>
  )
}

export default App
