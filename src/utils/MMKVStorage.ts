/*
 * @author GennadySX
 * @created at 2022
 **/

import {Storage} from 'redux-persist'
import {MMKV} from 'react-native-mmkv'
import '@apptypes/global.d'
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin'

export enum MMKVStorageEnums {
  city = '@city',
}

const mmkv = new MMKV({
  id: 'weatherApp',
  encryptionKey: '%^&*VdW@#!$()_+CsWz?+A',
})

if (__DEV__) {
  initializeMMKVFlipper({default: mmkv})
}

export const persistStorageMMKV: Storage = {
  setItem: (key: string, value: string) => {
    mmkv.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key: string) => {
    mmkv.delete(key)
    return Promise.resolve()
  },
}

const setToMMKVStorage: Function = (key: MMKVStorageEnums, data: string) => {
  mmkv.set(key, data)
}
const multiSetToMMKVStorage: Function = (params: [MMKVStorageEnums, string][]) => {
  params.map(([key, data]) => mmkv.set(key, data))
}

const removeFromMMKVStorage: Function = (key: MMKVStorageEnums) => {
  mmkv.delete(key)
}

const multiRemoveFromMMKVStorage: Function = (keys: MMKVStorageEnums[]) => {
  keys.map(key => mmkv.delete(key))
}

const getFromMMKVStorage = <T>(key: MMKVStorageEnums, convertObject?: boolean): T | undefined => {
  const storeValue = mmkv.getString(key)

  let value
  if (convertObject && storeValue) {
    value = JSON.parse(storeValue)
  } else {
    value = storeValue
  }
  return value as unknown as T
}

export const MMKVStorage = {
  store: mmkv,
  get: getFromMMKVStorage,
  set: setToMMKVStorage,
  delete: removeFromMMKVStorage,
  multiSet: multiSetToMMKVStorage,
  multiDelete: multiRemoveFromMMKVStorage,
}
