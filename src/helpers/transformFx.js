import { countryCurrencyMap } from '../constants/countryCurrencyMap'

export const transformFx = (fxData) => {
  const map = countryCurrencyMap
  //   console.log('map', map)
  for (let i in map) {
    map[i].flag = map[i].abbreviation.toLowerCase() + '.png'
  }

  return map
}
