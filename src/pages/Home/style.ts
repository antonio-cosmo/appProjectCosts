import styled  from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em;
  margin-top: 8rem;

  h1{
    font-size: 2.5em;
    margin-bottom: .5em;
    color: var(--text-title);

    span {
      color: #ffbb33;
      padding: 0 .2em;
      background-color: #222 ;
    }
  }

 p {
    margin-bottom: 1.5em;
    color: var(--text-body);
  }

  img {
    width: 350px;
    margin: 2em 0;
  }
`
  