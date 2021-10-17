import React from 'react'

import HealthIcon from '../../../assets/health.svg'

import {
  Container,
  Title,
} from './styles'

export function HealthCenter() {
  return (
    <Container>
      <HealthIcon />
      <Title>Central de saúde</Title>
    </Container>
  )
}
