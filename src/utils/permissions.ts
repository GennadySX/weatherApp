/*
 * @author GennadySX
 * @created at 2022
 **/

import {check, request as PermissionRequest, RESULTS} from 'react-native-permissions'
import {Permission} from 'react-native-permissions/src/types'

type GetResultType = {status: boolean; type: string}
const getResult = (status: boolean, type: string): GetResultType => ({
  status,
  type,
})

export const CheckPermission = async (
  permission: Permission,
  callback: (status: boolean, showModal?: boolean) => void,
) => {
  await check(permission)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          return getResult(false, RESULTS.UNAVAILABLE)
        case RESULTS.DENIED:
          return getResult(false, RESULTS.DENIED)
        case RESULTS.LIMITED:
          return getResult(true, RESULTS.LIMITED)
        case RESULTS.GRANTED:
          return getResult(true, RESULTS.GRANTED)
        case RESULTS.BLOCKED:
          return getResult(false, RESULTS.BLOCKED)
      }
    })
    .then((res: GetResultType) => {
      const wasBlocked = res.type === RESULTS.BLOCKED || res.type === RESULTS.DENIED
      console.log('wasBlocked', wasBlocked, res)
      if (wasBlocked && !!res?.status) {
        return callback(false, true)
      }
      if (!res?.status) {
        PermissionRequest(permission).then(result => {
          callback(result === RESULTS.GRANTED, wasBlocked && result === RESULTS.BLOCKED)
        })
      } else callback(true)
    })
    .catch(_ => {
      console.log('Вышла ошибка доступа! Проверь дано ли разрешение в мп ', _)
    })
}
