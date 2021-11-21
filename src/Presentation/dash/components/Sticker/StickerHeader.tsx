import React from 'react'
import { Animated, OpaqueColorValue, StyleSheet } from 'react-native'

interface StickerHeaderProps {
  height: string | number | Animated.Value | Animated.AnimatedInterpolation
  scrollY: Animated.Value
  inputRange: number[]
  bgImage?: string
  bgColor?: string | Animated.Value | Animated.AnimatedInterpolation | OpaqueColorValue
  isOpacity?: boolean
}

export function StickerHeader ({
  height,
  scrollY,
  inputRange,
  bgColor = 'gray',
  bgImage,
  isOpacity
}: StickerHeaderProps) {
  const imageOpacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 0],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View
      style={[
        styles.header, {
          height: height,
          opacity: isOpacity ? imageOpacity : 1,
          backgroundColor: bgImage ? 'transparent' : bgColor
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden'
  }
})
