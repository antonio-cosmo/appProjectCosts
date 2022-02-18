import styled from 'styled-components';

export const Container = styled.div`
  background-color: #222;
`;
export const NavBar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  a{
    text-decoration: none;
    p{
      font-size: 32px;
      font-style: italic;
      font-weight: bold;
      color: #fff;

      span{
        text-transform: uppercase;
        font-size: 50px;
      }
      img{
        width: 50px;
      }
    }
    
  }
  
  ul{
    display: flex;
    list-style: none;
    align-items: center;
  }
  
  li{
    margin-right: 1em;

    a{
      color: #fff;
      text-decoration: none;
    }

    a:hover{
      color: #ffbb33;
    }
  }
   
`