/*
 * @author GennadySX
 * @created at 2022
 **/

import {StyleSheet} from 'react-native'
import {WIDTH} from '@utils/normalizer'
import {Colors} from '@styles/colors'

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH,
  },
  title: {
    color: 'black',
  },
  label: {
    color: 'black',
  },
  icon: {
    width: 100,
    height: 100,
  },
  btnFv: {
    top: 100,
    borderRadius: 10,
    borderColor: Colors.GRAY_DARK,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 15,
  },
})
