import {Project, Service} from '../../../types'
import { FormEvent, useState } from 'react'
import {Input} from '../../layout/form/Input'
import {SubmitButton} from '../../layout/form/SubmitButton'

import {Form} from './styles'

type ServicetFormProps = {
  btnText: string,
  handleSubmit: (project: Project) => Promise<void>,
  projectData?: Project,
}

export function ServiceForm({ handleSubmit, btnText, projectData }: ServicetFormProps) {
  const [service, setService] = useState<Service>({} as Service)

  const submit = (el:FormEvent) => {
    el.preventDefault()
    if(!projectData) return 
    if(!service.cost) return
    if(Number(service.cost) < 0) return
    const updateService = {...service, cost: Number(service.cost)}
    
    projectData.services.push(updateService)
    handleSubmit(projectData)
  }

  function handleChange(el:HTMLInputElement) {
    setService({ ...service, [el.name]: el.value })
  }

  return (
    <Form onSubmit={submit}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
        value={service.name}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
        value={service.cost}

      />
      <Input
        type="text"
        text="Descrição do projeto"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
        value={service.description}
      />
      <SubmitButton text={btnText} />
    </Form>
  )
}

