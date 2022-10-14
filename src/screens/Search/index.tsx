/*
 * @author GennadySX
 * @created at 2022
 **/
import React, {useCallback, useEffect, useLayoutEffect} from 'react'
import {View, Text, InteractionManager, FlatList, TouchableOpacity} from 'react-native'
import {style} from './style'
import {SCREENS, StackParamList} from '@routes/navigation.types'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {SearchHeader} from '@screens/Search/components/SearchHeader'
import {useDebounce} from '../../hooks/useDebounce'
import {fetchAutocompleteApi} from '@api/weather/weather.requests'
import {City} from '@reducers/weather/weather.types'

const SearchScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>()
  const debounce = useDebounce(500)

  const [city, setCity] = React.useState<string>('')
  const [cities, setCities] = React.useState<City[]>([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Поиск',
      header: () => <SearchHeader onChangeText={debounce(setCity)} />,
    })
  }, [city, debounce, navigation])

  /**
   * Fetch cities
   */
  const getCities = useCallback(async (q: string) => {
    await fetchAutocompleteApi(q).then(res => {
      setCities(res)
    })
  }, [])

  const addCity = (res: City) => {
    navigation.navigate(SCREENS.WEATHER, {city: res})
  }

  useEffect(() => {
    InteractionManager.runAfterInteractions(async () => {
      city?.length > 1 && (await getCities(city))
    })
  }, [getCities, city, debounce])

  return (
    <View style={style.container}>
      <FlatList
        data={cities}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => addCity(item)}
            style={{
              paddingVertical: 14,
            }}>
            <Text style={{color: 'black'}}>
              {item.name}, {item.state ? item.state + ',' : ''} {item.country}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default SearchScreen
