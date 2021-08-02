import { countryToCurrency } from '../constants/countryToCurrency'

export const flagsLoader = (countryToCurrency) => {
  for (let key in countryToCurrency) {
    const newKey = key.toLowerCase() + '.png'
    // const currencyToFlagUrl = {}
    // currencyToFlagUrl[key] =
    countryToCurrency[newKey] = countryToCurrency[key]
  }
  return countryToCurrency
}
