import { Link, useLocation } from 'react-router-dom'
import { LinkButton } from '../../components/layout/LinkButton'
import { Message } from '../../components/layout/Message'
import { Container } from '../../styles/Container'
import { Div } from './style'

export function Projects() {

  const location = useLocation()
  let message = ''
  if (typeof location.state === 'string') {
    message = location.state
  }

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
      <Container className='start'>
        <p>...projetos</p>
      </Container>
    </Div>

  )
}