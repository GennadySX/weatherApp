/*
 * @author GennadySX
 * @created at 2022
 **/

import {Stack} from '@app'
import {SCREENS} from '@routes/navigation.types'
import HomeScreen from '@screens/Home'
import {Header} from '@components/Header'
import SearchScreen from '@screens/Search'
import WeatherScreen from '@screens/WeatherResult'
import FavoritesScreen from '@screens/Favorites'

export type ScreenProps = Parameters<typeof Stack['Screen']>[number]

export const RoutesScreens: ScreenProps[] = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    options: {
      header: Header,
      headerShown: true,
    },
  },
  {
    name: SCREENS.SEARCH,
    component: SearchScreen,
    options: {
      headerShown: true,
    },
  },
  {
    name: SCREENS.WEATHER,
    component: WeatherScreen,
    options: {
      headerShown: true,
    },
  },
  {
    name: SCREENS.FAVORITES,
    component: FavoritesScreen,
    options: {
      headerShown: true,
    },
  },
]
