import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import { Home } from './src/Presentation/dash/screens/Home'
import theme from './src/Presentation/core/styles/theme'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  )
}
