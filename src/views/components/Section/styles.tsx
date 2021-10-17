import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 20px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${({theme}) => theme.colors.text.primary};
`

export const Content = styled.View`
  margin-top: 12px;
`
