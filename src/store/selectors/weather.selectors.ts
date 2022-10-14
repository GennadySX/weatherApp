/*
 * @author GennadySX
 * @created at 2022
 **/

import {RootState} from '@store'
import {weatherAdapter} from '@reducers/weather/weather.reducer'
import {Weather} from '@reducers/weather/weather.types'

export const selectWeatherSelectors = (state: RootState) =>
  weatherAdapter.getSelectors().selectAll(state.weather)

/**
 * get current weather by coords
 * @param state
 */
export const selectMyWeather = (state: RootState): Weather | undefined =>
  selectWeatherSelectors(state).find(item => item.isMy)

/**
 * Get weather by city name
 * @param city
 */
export const selectWeatherByCity =
  (city: string) =>
  (state: RootState): Weather | undefined => {
    return selectWeatherSelectors(state).find(item => item.name === city)
  }

export const selectFavorites = (state: RootState): Weather[] => selectWeatherSelectors(state)
