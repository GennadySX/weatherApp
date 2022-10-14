/*
 * @author GennadySX
 * @created at 2022
 **/

import axios from 'axios'

const APIKEY = 'YOUR_API_KEY_OPENWEATHERMAP' // https://openweathermap.org/api

export const appInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
  headers: {
    Accept: 'application/json',
  },
})

export const ApiUrls = {
  coords: (lat: number, long: number) =>
    `/data/2.5/forecast?appid=${APIKEY}&lang=ru&units=metric&cnt=5&lat=${lat}&lon=${long}`,
  citySearch: (city: string) => `/geo/1.0/direct?q=${city}&limit=15&appid=${APIKEY}&lang=ru`,
  icon: (iconName: string, size?: number) =>
    `http://openweathermap.org/img/wn/${iconName}@${size ?? 2}x.png`,
}
