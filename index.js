/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'
import {Colors} from './src/styles/colors'
import {persistor, store} from './src/store/store'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import React from 'react'
import {PersistGate} from 'redux-persist/integration/react'

const BaseApp = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: Colors.WHITE}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

AppRegistry.registerComponent(appName, () => BaseApp)

if (Text.defaultProps == null) {
  Text.defaultProps = {}
  Text.defaultProps.allowFontScaling = false
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {}
  TextInput.defaultProps.allowFontScaling = false
}
