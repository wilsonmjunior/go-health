import React from 'react'
import { Dimensions, Platform, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { HealthCenter } from '../../components/HealthCenter'
import { HealthIndex } from '../../components/HealthIndex'
import { MedicalSchedule } from '../../components/MedicalSchedule'
import { Questionnaires } from '../../components/Questionnaires'
import { Section } from '../../components/Section'
import { StickerScrollViewHeader } from '../../components/Sticker/StickerScrollViewHeader'

import {
  Container,
  Divider
} from './styles'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0

export function Home () {
  const theme = useTheme()

  const headerMinHeight = STATUS_BAR_HEIGHT + 10
  const headerMaxHeight = 200
  const extraScrollHeight = 20

  return (
    <Container>
      <StickerScrollViewHeader
        headerMinHeight={headerMinHeight}
        headerMaxHeight={headerMaxHeight}
        extraScrollHeight={extraScrollHeight}
        navColor={theme.colors.primary[200]}
        headerColor={theme.colors.primary[200]}
        navHeight={50}
        scrollHeader
      >
        <View style={{ paddingVertical: 20 }}>
          <Section title="Índice de saúde">
            <HealthIndex />
          </Section>
          <Divider />
          <Section>
            <HealthCenter />
          </Section>
          <Divider />
          <Section title="Questionários de saúde">
            <Questionnaires />
          </Section>
          <Divider />
          <Section title="Minha agenda de consultas">
            <MedicalSchedule />
          </Section>
          <Divider />
          <Section title="Cartão de benefícios">
            <View style={{ height: 100 }} />
          </Section>
          <Divider />
        </View>
      </StickerScrollViewHeader>
    </Container>
  )
}
