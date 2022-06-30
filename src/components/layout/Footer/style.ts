import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: var(--green-900);
  color: #fff;
  padding: 1rem;
  text-align: center;
  /* position: fixed;
  left: 0 ;
  right: 0 ;
  bottom: 0; */

  ul{
    display: flex;
    justify-content: center;
    list-style: none;

    li{
      margin: 0 1rem;
      &:hover{
        color: #ffbb33;
      }
    }

    svg{
      font-size: 1.5em;
      cursor: pointer;
    }
  }

  p {
  margin-top: 0.5rem;

  span{
    font-weight: bold;
    color: #ffbb33;
  }
}
`
 






  


