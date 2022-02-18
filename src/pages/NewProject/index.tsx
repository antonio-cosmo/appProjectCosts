import { useNavigate} from 'react-router-dom';
import { ProjectForm } from '../../components/ProjectForm';
import {Container} from './style';

type Project = {
  cost:number,
  services:string[],
  name:string,
  value:string,
  category:{
    id:string,
    name:string,
  },
}

export function NewProject() {

  const navigate = useNavigate();

  const handleCreatePost = (project:Project) => {

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then(
      res => res.json()
    ).then(
      (data) => {
        console.log(data);
        navigate('/projects', {state:'Projeto criado com sucesso'});
      }
    ).catch(
      e => console.log('error')
    )
  }

  return (
    <Container>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm 
        btnText="Criar projeto"  
        handleCreatePost={handleCreatePost}
      />
    </Container>
  )
}