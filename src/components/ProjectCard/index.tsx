import { Link } from 'react-router-dom'
import {Container, Category, Actions} from './style'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

type ProjectCard = {
  id:string;
  name:string;
  budget:string;
  category:string;
 
}
function ProjectCard({name, budget, category }:ProjectCard) {
  console.log(name, budget, category)
  return (
    <Container>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R$ {budget}
      </p>
      <Category>
        <span className={category.toLowerCase()}></span> {category}
      </Category>
      <Actions>
        <Link to={'/'}>
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill />
          Excluir
        </button>
      </Actions>
    </Container>
  )
}

export default ProjectCard
