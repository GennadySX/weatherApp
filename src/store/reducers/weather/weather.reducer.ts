/*
 * @author GennadySX
 * @created at 2022
 **/

import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IWeatherState, Weather} from './weather.types'
import {addCityAction, fetchWeatherByCoordsAction, removeCityAction} from '@actions/weather.actions'

const initialState: IWeatherState = {
  weather: null,
  loading: false,
  error: null,
}

export const weatherAdapter = createEntityAdapter<Weather>({
  selectId: model => `${model.name}_${model.country}`,
})

type WeatherReducer = ReturnType<typeof weatherAdapter.getInitialState> & IWeatherState

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: weatherAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchWeatherByCoordsAction.fulfilled,
        (state: WeatherReducer, action: PayloadAction<Weather>) => {
          weatherAdapter.upsertOne(state, action.payload)
          state.loading = false
        },
      )
      .addCase(fetchWeatherByCoordsAction.pending, (state: WeatherReducer) => {
        state.loading = true
      })
      .addCase(
        fetchWeatherByCoordsAction.rejected,
        (state: WeatherReducer, action: PayloadAction<any>) => {
          state.error = action.payload?.error || 'Something went wrong, try again later'
          state.loading = false
        },
      )
      .addCase(addCityAction.fulfilled, (state: WeatherReducer, action: PayloadAction<Weather>) => {
        weatherAdapter.upsertOne(state, action.payload)
      })
      .addCase(
        removeCityAction.fulfilled,
        (state: WeatherReducer, action: PayloadAction<string>) => {
          weatherAdapter.removeOne(state, action.payload)
        },
      )
  },
})
