/*
 * @author GennadySX
 * @created at 2022
 **/

import {Brand} from '@apptypes/types'

export type WeatherId = Brand<number, 'WeatherID'>

export type IWeatherState = {
  weather: any
  loading: boolean
  error: any
}

export type Weather = {
  name: string
  country: string
  sunrise: number
  sunset: number
  coord: {
    lat: number
    lon: number
  }
  forecast: {
    icon: string | undefined
    temp: number
    main: string | undefined
    description: string | undefined
    min: number
    max: number
    dtx: string
  }[]
  isMy?: boolean
}

export type City = {
  id: string
  lat: number
  lon: number
  name: string
  country: string
  ruName: string
  state: string
}
