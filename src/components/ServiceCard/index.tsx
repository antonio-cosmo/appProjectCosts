import { FormEvent } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'

import {Container, Actions} from './styles'

type ServiceCardProps ={
  id:string, 
  name:string, 
  cost:string, 
  description:string, 
  handleRemove:(id:string, cost:string) => void 
}

export function ServiceCard({id, name, cost, description, handleRemove }:ServiceCardProps) {

  const remove = (el: FormEvent) => {
    el.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <Container>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <Actions>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </Actions>
    </Container>
  )
}

