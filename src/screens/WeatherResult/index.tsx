/*
 * @author GennadySX
 * @created at 2022
 **/
import React, {useEffect} from 'react'
import {View, InteractionManager} from 'react-native'
import {style} from './style'
import {SCREENS, StackParamList} from '@routes/navigation.types'
import {RouteProp, useRoute} from '@react-navigation/native'
import {Weather} from '@reducers/weather/weather.types'
import {fetchWeatherByCoords} from '@api/weather/weather.requests'
import {WeatherView} from '@components/Weather'
import {Preloader} from '@components/Preloader'

const WeatherScreen = () => {
  const {city} = useRoute<RouteProp<StackParamList, SCREENS.WEATHER>>().params

  const [weather, setWeather] = React.useState<Weather | null>(null)

  useEffect(() => {
    InteractionManager.runAfterInteractions(async () => {
      await fetchWeatherByCoords({lat: city.lat, lon: city.lon}).then(res => {
        setWeather(res)
      })
    })
  }, [city.lat, city.lon])

  return (
    <View style={style.container}>
      {weather ? <WeatherView hasFavoriteAble weather={weather} /> : <Preloader />}
    </View>
  )
}

export default WeatherScreen
