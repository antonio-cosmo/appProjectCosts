import { FormEvent } from 'react';
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
        onChange={(event) => handleOnChange(event.target)}
        value={value}
      />
    </Container>
  )
}