import styled from 'styled-components';

export const Container = styled.div`
  background: var(--green-900);
  position: fixed ;
  left: 0 ;
  right: 0 ;
  top: 0 ;
`;
export const NavBar = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

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
    margin-right: 1rem;

    a{
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
    }

    a:hover{
      color: #ffbb33;
    }
  }
   
`