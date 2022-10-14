/*
 * @author GennadySX
 * @created at 2022
 **/

import React, {FC} from 'react'
import {View, TouchableOpacity, TextInput, Image} from 'react-native'
import {style} from './style'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {StackParamList} from '@routes/navigation.types'
import {Colors} from '@styles/colors'
import HitSlops from '../../../../helpers/hitSlops'

type SearchHeaderProps = {
  onChangeText: (text: string) => void
}
export const SearchHeader: FC<SearchHeaderProps> = ({ onChangeText}) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>()

  const onBackNavigate = () => {
    navigation.goBack()
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onBackNavigate} hitSlop={HitSlops.hitSlop_16}>
        <Image source={require('@assets/icons/back.png')} style={style.icon} />
      </TouchableOpacity>

      <TextInput
        autoFocus
        style={style.input}
        placeholder="Поиск по городу"
        placeholderTextColor={Colors.GRAY_DARKEST}
        onChangeText={onChangeText}
      />
    </View>
  )
}
