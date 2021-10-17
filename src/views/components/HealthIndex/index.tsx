import React from 'react'

import { Button } from '../Button'
import { ScoreCard } from '../ScoreCard'

import {
  Container,
  ScoreWrapper,
  ButtonWrapper,
} from './styles'

export function HealthIndex() {
  return (
    <Container>
      <ScoreWrapper>
        <ScoreCard />
      </ScoreWrapper>
      
      <ButtonWrapper>
        <Button title="Detalhes do meu indice" />
      </ButtonWrapper>
    </Container>
  )
}
