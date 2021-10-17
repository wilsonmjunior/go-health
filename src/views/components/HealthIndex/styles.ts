import styled from 'styled-components/native'

export const Container = styled.View``

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${({theme}) => theme.colors.text.primary};
`

export const ScoreWrapper = styled.View`
  margin-top: 12px;
`

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`
