import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import HealthIcon from '../../assets/health.svg'

import {
  Container,
  Title
} from './styles'

interface Props extends RectButtonProps { }

export function HealthCenter ({ ...props }: Props) {
  return (
    <Container {...props}>
      <HealthIcon />
      <Title>Central de saúde</Title>
    </Container>
  )
}
