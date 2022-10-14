/*
 * @author GennadySX
 * @created at 2022
 **/

import {ApiUrls, appInstance} from '@api/index'
import {searchMapper, weatherMapper} from '@api/weather/weather.mappers'
import {AutoCompleteResponseDto, WeatherResponseDto} from '@api/weather/weather.types'
import {City, Weather} from '@reducers/weather/weather.types'

export const fetchWeatherByCoords = (
  coords: {lat: number; lon: number},
  itsMe?: boolean,
): Promise<Weather> => {
  return appInstance
    .get<{}, {data: WeatherResponseDto}>(ApiUrls.coords(coords.lat, coords.lon))
    .then(res => weatherMapper(res.data, itsMe))
}

export const fetchAutocompleteApi = (query: string): Promise<City[]> =>
  appInstance
    .get<{}, {data: AutoCompleteResponseDto[]}>(ApiUrls.citySearch(query))
    .then(res => searchMapper(res.data))
