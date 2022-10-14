/*
 * @author GennadySX
 * @created at 2022
 **/

import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchAutocompleteApi, fetchWeatherByCoords} from '@api/weather/weather.requests'
import {Weather} from '@reducers/weather/weather.types'

export const fetchWeatherByCoordsAction = createAsyncThunk(
  'fetch/weather/by/coords',
  async ({coords, itsMe}: {coords: {lat: number; lon: number}; itsMe?: boolean}) =>
    await fetchWeatherByCoords(coords, itsMe),
)

export const searchCityAction = createAsyncThunk('search/city', fetchAutocompleteApi)

export const addCityAction = createAsyncThunk(
  'add/city/weather',
  async (weather: Weather) => weather,
)

export const removeCityAction = createAsyncThunk(
  'remove/city/weather',
  async (weather: Weather) => `${weather.name}_${weather.country}`,
)
