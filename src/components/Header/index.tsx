/*
 * @author GennadySX
 * @created at 2022
 **/

import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from './style'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {SCREENS, StackParamList} from '@routes/navigation.types'

export const Header = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>()

  const onSearchNavigate = () => {
    navigation.navigate(SCREENS.SEARCH)
  }

  const onFavoritesNavigate = () => {
    navigation.navigate(SCREENS.FAVORITES)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearchNavigate}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnFv} onPress={onFavoritesNavigate}>
        <Text style={styles.textFv}>Favorites</Text>
      </TouchableOpacity>
    </View>
  )
}
