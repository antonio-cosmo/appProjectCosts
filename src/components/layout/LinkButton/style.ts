import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBtn = styled(Link)`
  background-color: #222;
  color: #fff;
  padding: .5em 1em;
  text-decoration: none;
  transition: 0.5s;

  &:hover{
    color: #ffbb33;
  }
`