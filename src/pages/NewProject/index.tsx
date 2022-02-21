import { useNavigate} from 'react-router-dom';
import { ProjectForm } from '../../components/ProjectForm';
import { Api } from '../../services/api';
import {Container} from './style';

type Project = {
  cost:number,
  services:Service[],
  name:string,
  budget:string,
  category:{
    id:string,
    name:string,
  },
}

type Service ={
  id:string, 
  name:string, 
  cost:string, 
  description:string, 
}

export function NewProject() {

  const navigate = useNavigate();

  const handleCreatePost = async (project:Project) => {
    project.cost = 0;
    project.services = [];
    await Api.post('projects', project)
    navigate('/projects', {state:'Projeto criado com sucesso'});

  }

  return (
    <Container>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm 
        btnText="Criar projeto"  
        handleSubmit={handleCreatePost}
      />
    </Container>
  )
}