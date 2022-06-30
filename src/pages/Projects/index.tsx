import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Project} from '../../types'
import { LinkButton } from '../../components/layout/LinkButton'
import { Loading } from '../../components/layout/Loading'
import { Message } from '../../components/layout/Message'
import {ProjectCard} from '../../components/project/ProjectCard'
import { Api } from '../../services/api'
import { Content } from '../../styles/Content'
import { Container } from './style'

export function Projects() {

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  let message = ''
  if (typeof location.state === 'string') {
    message = location.state
  }

  useEffect(()=>{
    setTimeout(()=>{
      Api.get('projects').then(res => {
        setProjects(res.data)
        setLoading(false)
      })
    }, 300)
  },[])

  const handleRemoveProject = async (id:string) => {
    await Api.delete(`projects/${id}`);
    const newProjects = projects.filter(project => project.id !== id)
    setProjects(newProjects)
    
  }


  return (
    <Container>
      <div className='title'>
        <h1>Meus Projetos</h1>
        <LinkButton 
          to="/newproject" 
          text="Novo projeto"
        />
      </div>
      {/* {message && <Message type="success" msg={message} />} */}
      <Content className='start'>
      {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemoveProject = {handleRemoveProject }
            />
          ))}
        {loading && <Loading/>}
        {!loading && projects.length === 0 &&  <p>Não ha projetos cadastrados</p>}
      </Content>
    </Container>

  )
}