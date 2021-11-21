import React from 'react'
import {
  Animated,
  RegisteredStyle,
  ScrollViewProps,
  View,
  ViewStyle
} from 'react-native'

export interface StickerScrollViewProps extends ScrollViewProps {
  innerContainerStyle?: RegisteredStyle<ViewStyle>
  scrollEventThrottle?: number
  marginTop: number
  scrollY: Animated.Value
}

export function StickerScrollView ({
  scrollY,
  innerContainerStyle,
  scrollEventThrottle = 16,
  marginTop,
  onScroll,
  children,
  ...props
}:StickerScrollViewProps) {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      scrollEventThrottle={scrollEventThrottle}
      onScroll={Animated.event(
        [{
          nativeEvent: { contentOffset: { y: scrollY } }
        }],
        {
          useNativeDriver: false,
          listener: onScroll
        }
      )}
      {...props}
    >
      <View
        style={[{ marginTop: marginTop }, innerContainerStyle]}
      >
        {children}
      </View>
    </Animated.ScrollView>
  )
}
