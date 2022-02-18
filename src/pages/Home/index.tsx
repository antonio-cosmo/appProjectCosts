import savings from '../../img/savings.svg';
import { LinkButton } from '../../components/layout/LinkButton';
import {Container} from './style';

export function Home() {
  return (
    <Container>
      <h1>
        Bem-vindo ao <span>Coins</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <LinkButton 
        to="/newproject" 
        text="Criar projeto"
      />
      <img src={savings} alt="Costs" />
    </Container>
  )
}