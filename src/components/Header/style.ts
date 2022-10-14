/*
 * @author GennadySX
 * @created at 2022
 **/

import {StyleSheet} from 'react-native'
import {WIDTH} from '@utils/normalizer'

export const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textFv: {
    color: 'black',
    fontSize: 16,
  },
  btnFv: {
    alignItems: 'center',
  },
})
