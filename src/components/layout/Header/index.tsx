import { Link } from "react-router-dom";
import logo from '../../../img/costs_logo.png'
import {Container} from '../../../styles/Container';
import { NavBar } from "./style";
export function Header() {
  return (
      <NavBar>
        <Container>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Projetos</Link>
            </li>
            <li>
              <Link to="/company">Empresa</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </Container>
      </NavBar>
  )
}