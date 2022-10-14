/*
 * @author GennadySX
 * @created at 2022
 **/

import {AutoCompleteResponseDto, WeatherResponseDto} from '@api/weather/weather.types'
import {City, Weather} from '@reducers/weather/weather.types'

export const weatherMapper = (data: WeatherResponseDto, itsMe?: boolean): Weather => {
  return {
    name: data.city?.name,
    country: data.city?.country,
    sunrise: data.city.sunrise,
    sunset: data.city.sunset,
    coord: data?.city?.coord,
    forecast:
      data.list?.map(item => ({
        icon: item.weather[0]?.icon,
        main: item.weather[0]?.main,
        description: item.weather[0]?.description,
        temp: item.main?.temp,
        min: item.main.temp_min,
        max: item.main.temp_max,
        dtx: item.dt_txt,
      })) || [],
    isMy: itsMe,
  }
}

export const searchMapper = (data: AutoCompleteResponseDto[]): City[] => {
  return data.map(item => ({
    id: `${item.name}_${item.state}_${item.country}`,
    lat: item.lat,
    lon: item.lon,
    name: item.name,
    country: item.country,
    ruName: item.name,
    state: item.state,
  }))
}
