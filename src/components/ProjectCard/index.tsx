import { Link } from 'react-router-dom'
import {Container, Category, Actions} from './style'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

type ProjectCard = {
  id:string;
  name:string;
  budget:string;
  category:string;
  handleRemoveProject: (id: string) => Promise<void>;
}
export function ProjectCard({id, name, budget, category, handleRemoveProject }:ProjectCard) {
  
  return (
    <Container>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span>
        { new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(budget))}
      </p>
      <Category>
        <span className={category.toLowerCase()}></span> {category}
      </Category>
      <Actions>
        <Link to={`/editeproject/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button
          onClick={() => handleRemoveProject(id)}
        >
          <BsFillTrashFill />
          Excluir
        </button>
      </Actions>
    </Container>
  )
}

