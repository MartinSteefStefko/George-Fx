import { countryCurrencyMap } from '../constants/countryCurrencyMap'

const removeUndefined = (obj) => {
  let newObj = []

  for (let i in obj) {
    if (obj[i].currency && obj[i].nameI18N && obj[i].exchangeRate) {
      newObj.push(obj[i])
    }
  }
  return newObj
}

export const transformFx = (fxData) => {
  const map = countryCurrencyMap
  const clearedFxData = removeUndefined(fxData)
  console.log('clearedFxData', clearedFxData)

  for (let i in map) {
    map[i].flag = map[i].abbreviation.toLowerCase() + '.png'
    map[i].apiData = clearedFxData.find(
      (obj) => obj.currency === map[i].currency
    )
  }

  return map
}
