import { styled } from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  background: ${props => props.theme['base-profile']};
  /* display: flex; */
  /* gap: 2rem; */
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 10px;
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${props => props.theme.blue};
    
    &:hover {
      font-weight: 700;
    }
  }
`

export const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${props => props.theme['base-title']};

  margin-top: 1.25rem;
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 24.5rem;
  margin-top: 0.5rem;

  span {
    color: ${props => props.theme['base-subtitle']};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`