import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 865px;
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const MainCard = styled.div`
  width: 100%;
  background: ${props => props.theme['base-profile']};
  display: flex;
  align-items: center;
  margin-top: -4rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`