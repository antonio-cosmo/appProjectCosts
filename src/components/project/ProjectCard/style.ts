import styled from 'styled-components';

export const Container = styled.div`
  padding: .5em;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 24%;
  margin: 0.5%;
  h4 {
    background-color: var(--green-900);
    color: #fff;
    padding: 0.4rem;
    margin-bottom: 1.3rem;
    font-size: 1.3rem;

  }

  p {
    color: var(--text-body);
    margin-bottom: 1em;

    span {
      font-weight: bold;
    }
  }

`;

export const Category = styled.p`

  display: flex;
  align-items: center;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 5px;

    &.infra {
      background-color: #ffaebc;
    }

    &.desenvolvimento {
      background-color: #a0e7e5;
    }

    &.design {
      background-color: #b4f8c8;
    }

    &.planejamento {
      background-color: #fbe7c6;
    }
  }

`;

export const Actions = styled.div`
  margin-top: 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  a,
  button {
    text-decoration: none;
    background-color: #fff;
    color: var(--text-body);
    font-size: 0.9em;
    padding: 0.5em 1em;
    margin-top: 5px;
    cursor: pointer;
    border: 1px solid #7a7a7a;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin-right: 0.5em;
  }

  a:hover,
  button:hover {
    background-color: #222;
    color: #ffbb33;
  }
  
`;









