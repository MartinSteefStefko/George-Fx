export const countryCurrencyModel = {
  name: '',
  abbreviation: '',
  flag: this.name.toLowerCase() + '.png',
  currencySymbol: '',
  currencyNameI18N: getI18NNameFromSymbol(symbol),
  currencyExchangeRate: getExchangeRateFromSymbol(symbol),
}
