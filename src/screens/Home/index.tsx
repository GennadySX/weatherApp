/*
 * @author GennadySX
 * @created at 2022
 **/

import {
  InteractionManager,
  View,
  Animated,
  ScrollViewProps,
  FlatListProps,
  FlatList,
  Alert,
  Linking,
} from 'react-native'
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react'
import {Geo} from '@utils/Geolocation'
import {GeolocationResponse} from '@react-native-community/geolocation'
import {useDispatch, useSelector} from 'react-redux'
import {fetchWeatherByCoordsAction} from '@actions/weather.actions'
import {selectFavorites} from '@selectors/weather.selectors'
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {Header} from '@components/Header'
import {WeatherView} from '@components/Weather'
import {WIDTH} from '@utils/normalizer'
import {DotProps} from '@components/PaginationDots/Dot/Dot'
import {style} from './style'
import PaginationDots from '@components/PaginationDots/PaginationDots'
import {Colors} from '@styles/colors'
import {SCREENS, StackParamList} from '@routes/navigation.types'
import {Preloader} from '@components/Preloader'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const routeParams = useRoute<RouteProp<StackParamList, SCREENS.HOME>>()?.params // get params from route

  const flatListRef = React.useRef<FlatList>(null) // for pagination dots

  const [scrollAnimatedValue] = useState(() => new Animated.Value(0)) // for pagination dots

  const favorites = useSelector(selectFavorites)
  /**
   * Get coords from geolocation and fetch weather
   */
  const onGetCoords = useCallback(async () => {
    await Geo.getCurrentCoords(async (geoRes: GeolocationResponse | null) => {
      console.log('res', geoRes?.coords)
      if (geoRes?.coords) {
        const coords = {
          lat: geoRes?.coords.latitude,
          lon: geoRes?.coords.longitude,
        }
        dispatch(fetchWeatherByCoordsAction({coords, itsMe: true}))
      } else {
        Alert.alert(
          'Ошибка',
          'Мы не смогли получить ваших геопозиции. Пож-та откройте доступ через настройки приложения',
          [
            {
              text: 'Настройки',
              onPress: Linking.openSettings,
            },
          ],
        )
      }
    })
  }, [dispatch])

  const onScroll = useCallback<NonNullable<ScrollViewProps['onScroll']>>(
    ({
      nativeEvent: {
        contentOffset: {x},
      },
    }) => {
      scrollAnimatedValue.setValue(x)
    },
    [scrollAnimatedValue],
  )

  const getDotWidthInputRange: DotProps['getDotWidthInputRange'] = useCallback(
    (index: number) => [WIDTH * (index - 1), WIDTH * index, WIDTH * (index + 1)],
    [],
  )

  /**
   * Key extractor for flatlist
   */
  const keyExtractor = useCallback<
    NonNullable<FlatListProps<typeof favorites[number]>['keyExtractor']>
  >(item => `${item.name}_${item.country}`, [])

  /**
   * Render item for flatlist
   */
  const renderAppStartStep = useCallback<
    NonNullable<FlatListProps<typeof favorites[number]>['renderItem']>
  >(({item, index}) => <WeatherView key={index} weather={item} />, [])

  /**
   * Set header before render
   */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Header />,
    })
  }, [navigation])

  /**
   * Fetch weather on mount
   */
  useEffect(() => {
    InteractionManager.runAfterInteractions(async () => {
      await onGetCoords()
    })
  }, [onGetCoords])

  /**
   * Scroll to current weather after select from favorites
   */
  useEffect(() => {
    if (routeParams?.weather) {
      const weather = routeParams?.weather
      const index = favorites.findIndex(item => item.name === weather.name)
      flatListRef.current?.scrollToIndex({index: index, animated: true})
    }
  }, [favorites, routeParams?.weather])

  return (
    <View style={style.block}>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        ListEmptyComponent={<Preloader />}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        nestedScrollEnabled
        contentContainerStyle={style.container}
        onScroll={onScroll}
        data={favorites}
        keyExtractor={keyExtractor}
        renderItem={renderAppStartStep}
      />
      <PaginationDots
        dotColor={Colors.BLACK}
        numberOfPages={favorites.length}
        getDotWidthInputRange={getDotWidthInputRange}
        animatedValue={scrollAnimatedValue}
        containerStyle={style.pagination}
      />
    </View>
  )
}

export default HomeScreen
