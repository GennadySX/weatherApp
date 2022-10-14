/*
 * @author GennadySX
 * @created at 2022
 **/

import {Dimensions} from 'react-native'

const Window = Dimensions.get('window')
const Screen = Dimensions.get('screen')
const WIDTH = Window.width
const HEIGHT = Window.height
const SCREEN_SCALE = Window.scale

export {Window, WIDTH, HEIGHT, SCREEN_SCALE, Screen}
