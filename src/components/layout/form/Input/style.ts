import styled from 'styled-components';

export const Container =styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label{
    margin-bottom: .6em;
    font-weight: bold;
    color: var(--text-title);
  }

  input{
    padding: .7em;
    border-radius: 0;
    border: none;

    &::placeholder{
      color: var(--text-body);
    }
  }
`
  