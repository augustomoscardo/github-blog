import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const PostsContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostCard = styled(Link)`
  background: ${props => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  width: 26rem;

  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-color: ${props => props.theme.blue};
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    h2 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${props => props.theme['base-title']};
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
      white-space: nowrap; 
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${props => props.theme['base-text']};

  }
`

export const PostCardContent = styled.div`
  font-size: 1rem;

  display: flex;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
  }
`