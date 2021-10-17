import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Divider = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.primary[50]};
  margin: 24px 0;
`
