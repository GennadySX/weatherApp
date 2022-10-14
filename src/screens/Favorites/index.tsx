/*
 * @author GennadySX
 * @created at 2022
 **/
import React, {useCallback} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {style} from './style'
import {SCREENS, StackParamList} from '@routes/navigation.types'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux'
import {selectFavorites} from '@selectors/weather.selectors'
import {Weather} from '@reducers/weather/weather.types'
import {Swipeable} from 'react-native-gesture-handler'
import {Colors} from '@styles/colors'
import {removeCityAction} from '@actions/weather.actions'

const FavoritesScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>()
  const dispatch = useDispatch()

  const favorites = useSelector(selectFavorites)

  const onNavigate = (favorite: Weather) => {
    navigation.navigate(SCREENS.HOME, {weather: favorite})
  }

  const onDelete = useCallback(
    (favorite: Weather) => {
      dispatch(removeCityAction(favorite))
    },
    [dispatch],
  )

  const rightButton = (favorite: Weather) => {
    return (
      <TouchableOpacity
        onPress={() => onDelete(favorite)}
        style={{
          width: 40,
          height: 40,
          backgroundColor: Colors.GRAY_DARKEST,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>X</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={style.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => (
          <Swipeable enabled={!item?.isMy} avgTouches renderRightActions={() => rightButton(item)}>
            <TouchableOpacity
              onPress={() => onNavigate(item)}
              style={{
                paddingVertical: 14,
              }}>
              <Text style={{color: 'black'}}>
                {item.name}, {item.country}
              </Text>
            </TouchableOpacity>
          </Swipeable>
        )}
      />
    </View>
  )
}

export default FavoritesScreen
