/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import {ActivityIndicator, Text, View} from 'react-native'
import {style} from './style'

export interface IPreloader {
  spinnerTheme?: 'light' | 'dark'
  spinnerColor?: string
}

export const Preloader = ({spinnerTheme, spinnerColor}: IPreloader) => {
  return (
    <View style={[style.block]}>
      <ActivityIndicator
        size={'large'}
        color={
          spinnerTheme === 'light'
            ? style.lightSpinner.color
            : spinnerColor
            ? spinnerColor
            : style.darkSpinner.color
        }
      />
      <Text style={style.text}>Пожалуйста, подождите</Text>
    </View>
  )
}
