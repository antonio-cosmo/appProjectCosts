import { useNavigate} from 'react-router-dom';
import { Project } from '../../types'
import { ProjectForm } from '../../components/project/ProjectForm';
import { Api } from '../../services/api';
import {Container} from './style';
import { toast } from 'react-toastify';

export function NewProject() {

  const navigate = useNavigate();

  const handleCreatePost = async (project:Project) => {
    project.cost = 0;
    project.services = [];
    project.budget = Number(project.budget)
    if(project.budget <= 0) return
    await Api.post('projects', project)
    toast.success('Criado com sucesso!');
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