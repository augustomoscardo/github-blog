import { styled } from "styled-components"

export const ProfileContainer = styled.div`
  width: 100%;
  background: ${props => props.theme['base-profile']};
  display: flex;
  gap: 2rem;
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfoWrapper = styled.div`
  flex: 1;

  p {
    font-weight: 400;
    margin-top: 0.5rem;
  }

`

export const ProfileInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${props => props.theme['base-title']};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${props => props.theme.blue};
    cursor: pointer;

    &:hover{
      font-weight: bold;

      transition: all 0.2s;
    }
  }
`

export const ProfileLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  span {
    color: ${props => props.theme['base-subtitle']};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`