import styled from 'styled-components'

export const Container = styled.div`
  padding: 2em;
  width: 100%;
  height: 100vh;
  h1,
  h2,
  p {
    margin-bottom: 0.5em;
  }

  h1 {
    background-color: #222;
    color: #ffbb33;
    padding: 0.4em;
  }

  span {
    font-weight: bold;
  }

`;

export const Details = styled.div`
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: #222;
  color: #fff;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  max-height: 40px;

  &:hover {
    color: #ffbb33;
  }
`

export const Form = styled.div`
  width: 100%;
`

export const Service = styled.div`

  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`


