/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SCREENS, StackParamList} from '@routes/navigation.types'
import {NavigationContainer} from '@react-navigation/native'
import {RoutesScreens, ScreenProps} from '@routes/routes'
import {Colors} from '@styles/colors'
import {WIDTH} from '@utils/normalizer'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

export const Stack = createNativeStackNavigator<StackParamList>()

const App = () => {
  return (
    <GestureHandlerRootView style={{width: WIDTH, height: '100%'}}>
      <NavigationContainer independent>
        <Stack.Navigator
          initialRouteName={SCREENS.HOME}
          screenOptions={{
            animation: 'simple_push',
            contentStyle: {backgroundColor: Colors.WHITE},
          }}>
          {RoutesScreens.map((screen: ScreenProps) => (
            <Stack.Screen key={screen.name} {...screen} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
