/*
 * @author GennadySX
 * @created at 2022
 **/

import {StyleSheet} from 'react-native'
import {WIDTH} from '@utils/normalizer'
import {Colors} from "@styles/colors";

export const style = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  icon: {
    alignSelf: 'center',
    top: 5,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8d8d8d',
    padding: 10,
    fontSize: 16,
    color: Colors.BLACK,
    width: WIDTH - 60,
    height: 40,
    top: 5,
  },
})
