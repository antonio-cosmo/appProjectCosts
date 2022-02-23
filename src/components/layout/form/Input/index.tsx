import { useEffect, useState } from 'react';
import { Container } from './style';

type InputProps = {
  type: string,
  text: string,
  name: string,
  placeholder: string,
  handleOnChange: (e: HTMLInputElement) => void,
  value: string,
}

export function Input({ type, text, name, placeholder, handleOnChange, value}: InputProps) {
//  const [valueInput, setValueInput] = useState(() => {
//    if(value) return value
//    return ''
//  })
//  const [typeInput, setTypeInput] = useState(type)
//  const [nameInput, setNameInput] = useState(name)
//  const [placeholdercInput, setPlaceholderInput] = useState(placeholder)
//  const [textInput, setTextInput] = useState(text)

// useEffect(()=>{
//   setValueInput(value)
//   setTypeInput(type)
//   setNameInput(name)
//   setPlaceholderInput(placeholder)
//   setTextInput(text)
// })

  return (
    <Container>
      <label htmlFor={name}>
        {text}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(event) => {
          handleOnChange(event.target);
          // setValueInput(event.target.value)

        }}
        value={value || ''}
      />
    </Container>
  )
}