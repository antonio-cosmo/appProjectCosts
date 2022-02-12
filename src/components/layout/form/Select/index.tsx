import { FormEvent } from 'react';
import { Container } from './style';

type InputProps = {
  text: string,
  name: string,
  handleOnChange: (e: FormEvent) => void,
  value: string,
  options: Option[],
}

type Option = {
  id: number,
  name: string,
}

export function Select({ text, name, options, handleOnChange, value }: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>
        {text}
      </label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option>Selecione uma opção</option>
        {options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
      </select>
    </Container>
  )
}