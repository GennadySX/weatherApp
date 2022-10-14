/*
 * @author GennadySX
 * @created at 2022
 **/

import React, {useMemo} from 'react'
import {StyleProp, View, ViewStyle} from 'react-native'
import {Dot, DotProps} from './Dot/Dot'
import style from './styles'

export type PaginationDotsProps = {
  numberOfPages: number
  containerStyle?: StyleProp<ViewStyle>
  dotColor?: string
  unActiveColor?: string
} & Pick<DotProps, 'getDotWidthInputRange' | 'animatedValue'>
const PaginationDots = ({
  numberOfPages,
  getDotWidthInputRange,
  animatedValue,
  containerStyle,
  dotColor,
  unActiveColor,
}: PaginationDotsProps) => {
  const Dots = useMemo(
    () =>
      new Array(numberOfPages)
        .fill(0)
        .map((_, index) => (
          <Dot
            key={index}
            index={index}
            getDotWidthInputRange={getDotWidthInputRange}
            animatedValue={animatedValue}
            dotColor={dotColor}
            unActiveColor={unActiveColor}
          />
        )),
    [numberOfPages, getDotWidthInputRange, animatedValue, dotColor, unActiveColor],
  )

  return (
    <View style={[style.container, containerStyle]} pointerEvents="none">
      {Dots}
    </View>
  )
}
export default React.memo(PaginationDots)
