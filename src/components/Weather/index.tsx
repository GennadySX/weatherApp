/*
 * @author GennadySX
 * @created at 2022
 **/

import React, {FC} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {style} from './style'
import {ApiUrls} from '@api/index'
import {Weather} from '@reducers/weather/weather.types'
import HitSlops from '../../helpers/hitSlops'
import {useDispatch, useSelector} from 'react-redux'
import {addCityAction} from '@actions/weather.actions'
import {selectWeatherByCity} from '@selectors/weather.selectors'

type WeatherViewProps = {
  weather: Weather
  hasFavoriteAble?: boolean
}
export const WeatherView: FC<WeatherViewProps> = ({weather, hasFavoriteAble}) => {
  const dispatch = useDispatch()

  const weatherByCity = useSelector(selectWeatherByCity(weather.name)) // weatherByCity = weather

  /**
   * Add city to favorites list
   */
  const onAddFavorite = () => {
    dispatch(addCityAction(weather))
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>{weather?.name}</Text>
      {weather?.forecast[0]?.temp && (
        <Text style={style.label}>
          {Math.round(Number(weather?.forecast[0]?.temp))} °C {weather?.forecast[0]?.description}
        </Text>
      )}
      <Image source={{uri: ApiUrls.icon(weather?.forecast[0]?.icon || '02n')}} style={style.icon} />

      {hasFavoriteAble && !weatherByCity?.name && (
        <TouchableOpacity
          style={style.btnFv}
          hitSlop={HitSlops.hitSlop_16}
          onPress={onAddFavorite}>
          <Text style={{color: 'black'}}>+ Add to Favorites</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
