import React, {ReactNode} from 'react'

import {
  Container, 
  Title,
  Content,
} from './styles'

interface SectionProps {
  title?: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <Container>
      {title && <Title>{title}</Title> }
      
      <Content>
        {children}
      </Content>
    </Container>
  )
}
