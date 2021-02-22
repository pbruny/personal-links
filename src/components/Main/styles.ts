import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 30rem) {
    justify-content: flex-start;
  }

  @media screen and (max-height: 768px) {
    justify-content: flex-start;
  }
`

export const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding: 16px;
    margin: 0 16px;
    border-radius: 1rem;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.45);
  }
`

export const Picture = styled.img`
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 50%;
  margin-bottom: 2rem;

  @media screen and (max-width: 30rem) {
    max-width: 12rem;
    max-height: 12rem;
  }
`

export const Social = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  color: lightgray;
  margin-bottom: 1.4rem;
`

export const Title = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: 30rem) {
    font-size: 3rem;
  }
`

export const Description = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  max-width: 50rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 30rem) {
    font-size: 1.8rem;
    font-weight: 400;
  }
`

export const LinksList = styled.ul`
  list-style: none;
`
