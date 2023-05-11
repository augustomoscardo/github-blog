import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 865px;
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const ProfileCard = styled.div`
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
      text-decoration: underline;
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
  }
`

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
    }
  }

  form {
    width: 100%;

    input {
      width: 100%;
      margin-top: 0.75rem;

      background: ${props => props.theme['base-input']};
      padding: 0.75rem 1rem;
      border: 1px solid ${props => props.theme['base-border']};
      border-radius: 6px;

      color: ${props => props.theme['base-text']};

      &:focus {
        border-color: ${props => props.theme.blue};;
      }

      &::placeholder {
        color: ${props => props.theme['base-label']};;
      }
    }
  }
`