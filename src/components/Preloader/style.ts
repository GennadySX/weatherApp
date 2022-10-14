/*
 * @author GennadySX
 * @created at 2021
 **/
import { StyleSheet } from 'react-native'
import {Colors} from "@styles/colors";


export const style = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    zIndex: 999,
  },
  darkSpinner: {
    color: Colors.BLACK,
  },
  lightSpinner: {
    color: Colors.WHITE,
  },
  text: {
    lineHeight: 16,
    marginTop: 20,
    color: Colors.BLACK,
  },
})
