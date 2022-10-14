/*
 * @author GennadySX
 * @created at 2022
 **/

import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation'
import {isIPhone} from '@utils/platform'
import {PERMISSIONS} from 'react-native-permissions'
import {CheckPermission} from '@utils/permissions'

const getCurrentCoords = async (
  callback: (location: GeolocationResponse | null, error?: any) => void,
) => {
  if (isIPhone) {
    Geolocation.requestAuthorization()
    await CheckPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, async status => {
      if (status) {
        await getGeo(callback)
      } else {
        await CheckPermission(PERMISSIONS.IOS.LOCATION_ALWAYS, async () => {
          await getGeo(callback)
        })
      }
    })
  } else {
    await getGeo(callback)
  }
}

const getGeo = async (callback: (location: GeolocationResponse | null, error?: any) => void) => {
  await Geolocation.getCurrentPosition(
    geoResponse => {
      callback(geoResponse)
    },
    error => callback(null, error),
    {
      timeout: 1200000,
    },
  )
}


export const Geo = {
  getCurrentCoords,
}
