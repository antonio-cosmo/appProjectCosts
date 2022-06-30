import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  margin-top: 8rem;
  h1,
  h2,
  p {
    margin-bottom: 0.5em;
  }

  h2 {
    color: var(--text-title);
  }

  #msg{
    color: var(--text-body);
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  &.start{
    justify-content: flex-start;
    flex-wrap: wrap;

  }
  &.column{
    flex-direction: column;
    justify-content: flex-start;
  }

`

export const Details = styled.div`
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    background: var(--green-900);
    /* color: #ffbb33; */
    color:#ffbb33;
    padding: 0.4rem;
    border-radius: 2px ;
  }

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
  p {
    color: var(--text-body);
    span {
    font-weight: bold;
  }
  }
`

export const Services = styled.div`

  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h2 {
    color: var(--text-title);
  }
`


