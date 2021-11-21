import React, { useState } from 'react'
import { StyleSheet, View, Animated, RefreshControl, ActivityIndicator } from 'react-native'

import { StickerHeader } from './StickerHeader'
import { StickerNavbar } from './StickerNavbar'
import { StickerScrollView } from './StickerScrollView'

interface StickerProps {
  headerMinHeight: number
  headerMaxHeight: number
  extraScrollHeight: number
  navColor: string
  headerColor: string
  navHeight: number
  scrollHeader?: boolean
  children: React.ReactNode
}

export function StickerScrollViewHeader ({
  headerMinHeight,
  headerMaxHeight,
  extraScrollHeight,
  navColor,
  headerColor,
  navHeight,
  scrollHeader,
  children
}: StickerProps) {
  const [scrollY] = useState(new Animated.Value(0))
  const [refreshing, setRefreshing] = useState(false)

  const headerScrollDistance = headerMaxHeight - headerMinHeight
  const inputRange = [-extraScrollHeight, 0, headerScrollDistance]

  const headerHeight = scrollY.interpolate({
    inputRange,
    outputRange: [
      headerMaxHeight + extraScrollHeight,
      headerMaxHeight,
      headerMinHeight
    ],
    extrapolate: 'clamp'
  })

  function onRefresh () {
    setRefreshing(true)

    setTimeout(() => {
      console.warn('refreshing')
      setRefreshing(false)
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <StickerScrollView
        style={scrollHeader
          ? {
              marginTop: -(headerMaxHeight - 40), zIndex: 2
            }
          : {}}
        marginTop={scrollHeader ? headerMaxHeight * 2 : headerMaxHeight + 10}
        scrollY={scrollY}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} titleColor="#000" tintColor="#3dc1cd" />}
      >
        {refreshing && (
          <ActivityIndicator color="purple" />
        )}
        {children}
      </StickerScrollView>

      <StickerNavbar
        height={navHeight}
        scrollY={scrollY}
        inputRange={inputRange}
        bgColor={navColor}
        zIndex={scrollHeader ? 10 : 1}
      />

      <StickerHeader
        height={headerHeight}
        scrollY={scrollY}
        inputRange={inputRange}
        bgColor={headerColor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})
