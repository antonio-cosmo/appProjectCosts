import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {Project, Service} from '../../types'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/layout/Loading'
import { Message } from '../../components/layout/Message'
import { ProjectForm } from '../../components/project/ProjectForm'
import { ServiceCard } from '../../components/service/ServiceCard'
import { ServiceForm } from '../../components/service/ServiceForm'
import { Api } from '../../services/api'
// import { Content } from '../../styles/Content'

import { Button, Container, Details, Form, Services, Content } from './styles'

export function EditeProject() {
  const [project, setProject] = useState<Project>({} as Project)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [services, setServices] = useState<Service[]>([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')
  const { id } = useParams()

  useEffect(() => {
    const time = setTimeout(() => {
      (async () => {
        const res = await Api.get('projects', { params: { id } })
        const [result] = res.data
        setProject(result)
        setServices(result.services)

      })();

    }, 500)

    return () => {
      clearTimeout(time)
      setProject({} as Project)
      setServices([])
    }
  }, [id])

  const editPost = async (project: Project) => {
    setMessage('')
    project.budget = Number(project.budget)
    if (project.budget < Number(project.cost)) {
      setMessage('O orçamento do não pode ser menor que o custo do projeto!')
      setType('error')
      return
    }

    const res = await Api.patch(`projects/${project.id}`, project);
    setProject(res.data)
    setShowProjectForm(!showProjectForm)
    setMessage('Projeto atualizado')
    setType('success')  
  }

  const createService = async (project: Project) => {
    setMessage('')
    
    const lastService = project.services[project.services.length - 1]
    
    lastService.id = uuidv4()
    const lastServiceCost = lastService.cost
    const newCost = project.cost + Number(lastServiceCost)

    if (newCost > project.budget) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return
    }

    project.cost = newCost
    project.budget = project.budget - Number(lastServiceCost)
    await Api.patch(`projects/${project.id}`, project);
    setShowServiceForm(!showServiceForm)
    setMessage('Projeto atualizado')
    setType('success')  

  }

  const removeService = (id: string, cost: number) => {
    setMessage('')
    const servicesUpdate = project.services.filter(service => service.id !== id)

    const projectUpdate = {...project}
    projectUpdate.services =servicesUpdate
    projectUpdate.cost = project.cost - Number(cost)
    projectUpdate.budget = project.budget + Number(cost)
    Api.patch(`projects/${project.id}`, projectUpdate).then((res) =>{
      setServices(servicesUpdate)
      setProject(projectUpdate);
      setMessage('Serviço removido com sucesso')
      setType('success')
    })

  }
  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm)
  }
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {project.name
        ? (
          <Container>
            <Content className="column">
              {message && <Message type={type} msg={message} />}
              <Details>
                <h1>Projeto: {project.name}</h1>
                <Button onClick={toggleProjectForm}>
                  {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                </Button>
                {!showProjectForm ? (
                  <Form>
                    <p>
                      <span>Categoria:</span> {project.category.name}
                    </p>
                    <p>
                      <span>Total do orçamento:</span> 
                      { new Intl.NumberFormat('pt-BR', 
                        {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(project.budget)
                      }
                    </p>
                    <p>
                      <span>Total utilizado:</span>
                      { new Intl.NumberFormat('pt-BR', 
                        {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(project.cost)
                      }
                    </p>
                  </Form>
                ) : (
                  <Form>
                    <ProjectForm
                      btnText="Concluir edição"
                      handleSubmit={editPost}
                      projectData={project}
                    />
                  </Form>
                )}
              </Details>
            </Content>
            <Services>
              <h2>Adicione um serviço:</h2>
              <Button onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
              </Button>
              <Form>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </Form>
            </Services>
            <h2>Serviços:</h2>
            <Content className="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p id="msg">Não há serviços cadastrados.</p>}
            </Content>
          </Container>
        ) : (<Loading />)}
    </>
  )
}