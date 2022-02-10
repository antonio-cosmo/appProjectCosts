import styled from 'styled-components'


export const Container = styled.footer`
  width: 100%;
  background-color: #222;
  color: #fff;
  padding: 3em;
  text-align: center;

  ul{
    display: flex;
    justify-content: center;
    list-style: none;

    li{
      margin: 0 1em;
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
  margin-top: 2em;

  span{
    font-weight: bold;
    color: #ffbb33;
  }
}
`
 






  


