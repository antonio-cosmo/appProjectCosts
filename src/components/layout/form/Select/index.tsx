import {Container} from './style'

type InputProps ={
  // type:string, 
  text:string, 
  name:string,
  // placeholder:string,
  // handleOnChange:() => void, 
  // value:string

}
export function Select({ text, name }:InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </Container>
  )
}