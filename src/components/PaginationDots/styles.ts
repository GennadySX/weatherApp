/*
 * @author GennadySX
 * @created at 2022
 **/

import {StyleSheet} from 'react-native'

export const PAGINATION_DOT_SIZE = 5
export const PAGINATION_DOT_SIZE_ACTIVE = 18

const style = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: PAGINATION_DOT_SIZE_ACTIVE,
    height: PAGINATION_DOT_SIZE,
    marginHorizontal: 4,
    borderRadius: 4,
  },
})
export default style
