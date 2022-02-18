import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LinkButton } from '../../components/layout/LinkButton'
import { Message } from '../../components/layout/Message'
import ProjectCard from '../../components/ProjectCard'
import { Content } from '../../styles/Content'
import { Div } from './style'

type Project = {
  id:string
  cost: number,
  services: string[],
  name: string,
  budget: string,
  category: {
    id: string,
    name: string,
  },
}
export function Projects() {

  const [projects, setProjects] = useState<Project[]>([])
  const location = useLocation()
  let message = ''
  if (typeof location.state === 'string') {
    message = location.state
  }

  useEffect(()=>{
    fetch("http://localhost:5000/projects", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
      return res.json()
    }).then(data => setProjects(data))
  },[])

  console.log(projects)

  return (
    <Div>
      <div className='title'>
        <h1>Meus Projetos</h1>
        <LinkButton 
          to="/newproject" 
          text="Novo projeto"
        />
      </div>
      {message && <Message type="success" msg={message} />}
      <Content className='start'>
      {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
      </Content>
    </Div>

  )
}