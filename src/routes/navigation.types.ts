/*
 * @author GennadySX
 * @created at 2022
 **/

import {City, Weather} from '@reducers/weather/weather.types'

export enum SCREENS {
  HOME = 'Home',
  WEATHER = 'Weather',
  SEARCH = 'Search',
  FAVORITES = 'Favorites',
}

export type StackParamList = {
  [SCREENS.HOME]: undefined | {weather: Weather}
  [SCREENS.WEATHER]: {city: City}
  [SCREENS.SEARCH]: undefined
  [SCREENS.FAVORITES]: undefined
}
