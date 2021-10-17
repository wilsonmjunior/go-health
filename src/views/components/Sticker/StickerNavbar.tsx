import React from "react";
import { Animated, OpaqueColorValue, StyleSheet } from "react-native";

export interface StickerNavbarProps {
  height: string | number | Animated.Value | Animated.AnimatedInterpolation
  bgColor?: string | Animated.Value | Animated.AnimatedInterpolation | OpaqueColorValue 
  scrollY: Animated.Value
  inputRange: number[]
  isOpacity?: boolean
  zIndex?: number | Animated.Value | Animated.AnimatedInterpolation
}

export function StickerNavbar({ height, bgColor = 'gray', zIndex, isOpacity, scrollY, inputRange }: StickerNavbarProps) {
  const opacity = scrollY.interpolate({
    inputRange: inputRange,
    outputRange: [0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View 
      style={[
        styles.header,
        {
          height: height,
          zIndex: zIndex,
          backgroundColor: bgColor,
          opacity: isOpacity ? opacity : 1,
        },
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
    overflow: 'hidden',
  }
})