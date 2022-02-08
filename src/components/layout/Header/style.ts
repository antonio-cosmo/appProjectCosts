import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em;
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