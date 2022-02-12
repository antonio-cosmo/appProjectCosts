import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Container} from './style';
export function Footer() {
  return (
      <Container>
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p><span>Costs</span> &copy; 2022 </p>
      </Container>
  )
}