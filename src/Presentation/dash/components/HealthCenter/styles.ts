import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 80px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[200]};

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.shape}
`
