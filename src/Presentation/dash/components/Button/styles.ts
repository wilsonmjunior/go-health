import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary[300]};

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape}; 
  font-weight: bold;
`
