/*
 * @author GennadySX
 * @created at 2022
 **/

import thunk from 'redux-thunk'

import {rootReducer} from './reducers'
import {applyMiddleware, createStore} from '@reduxjs/toolkit'
import {persistStorageMMKV} from '../utils/MMKVStorage'
import {persistReducer, persistStore} from 'redux-persist'

const middlewares = [thunk]
if (__DEV__) {
  const createDebugger = require('redux-flipper').default
  middlewares.push(createDebugger())
}
const persistConfig = {
  key: 'root',
  storage: persistStorageMMKV,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
