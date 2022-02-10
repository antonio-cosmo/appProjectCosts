import { ProjectForm } from '../../components/ProjectForm'
import {Container} from './style'
export function NewProject() {
  return (
    <Container>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto" />
    </Container>
  )
}