import { styled } from "styled-components";

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