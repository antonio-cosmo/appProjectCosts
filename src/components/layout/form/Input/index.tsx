import {Container} from './style';

type InputProps ={
  type:string, 
  text:string, 
  name:string,
  placeholder:string,
  // handleOnChange:() => void, 
  // value:string

}
export function Input({ type, text, name, placeholder}:InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </Container>
  )
}