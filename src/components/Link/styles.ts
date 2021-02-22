import styled from 'styled-components'

export const Wrapper = styled.li`
  padding: 0.8rem 20rem;
  min-width: 26rem;
  max-width: 50rem;
  margin: 2rem;
  background: rgba(255, 101, 193, 1);
  border-radius: 1.6rem;
  transition: 0.4s;
  position: relative;
  list-style: none;
  cursor: pointer;

  &:hover {
    background: rgba(255, 101, 193, 0.85);
  }

  @media screen and (max-width: 32rem) {
    padding: 0.8rem;
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 1.8rem;

  svg {
    position: absolute;
    left: 3rem;
    max-width: 2.4rem;
    max-height: 2.4rem;
  }
`
