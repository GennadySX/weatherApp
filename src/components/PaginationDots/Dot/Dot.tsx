/*
 * @author GennadySX
 * @created at 2022
 **/

import {Animated} from 'react-native'
import React, {useMemo} from 'react'
import style, {PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE} from '../styles'

export type DotProps = {
  index: number
  getDotWidthInputRange: (index: number) => number[]
  animatedValue: Animated.Value
  dotColor?: string
  unActiveColor?: string
}
export const Dot = ({
  index,
  getDotWidthInputRange,
  animatedValue,
  dotColor = '#CCCCCC',
  unActiveColor,
}: DotProps) => {
  const width = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: getDotWidthInputRange(index),
        outputRange: [PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE, PAGINATION_DOT_SIZE],
        extrapolate: 'clamp',
      }),
    [animatedValue, getDotWidthInputRange, index],
  )

  const opacity = useMemo(
    () =>
      width.interpolate({
        inputRange: [PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE],
        outputRange: [0.48, 1],
        extrapolate: 'clamp',
      }),
    [width],
  )
  const color = useMemo(
    () =>
      width.interpolate({
        inputRange: [PAGINATION_DOT_SIZE, PAGINATION_DOT_SIZE_ACTIVE],
        outputRange: [unActiveColor || dotColor, dotColor],
        extrapolate: 'clamp',
      }),
    [dotColor, unActiveColor, width],
  )

  return <Animated.View style={[style.dot, {width, opacity, backgroundColor: color}]} />
}
