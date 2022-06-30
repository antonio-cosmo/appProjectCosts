import { FormEvent, useEffect, useState } from 'react';
import { Container } from './style';

type InputProps = {
  text: string,
  name: string,
  handleOnChange: (e: HTMLSelectElement) => void,
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
        onChange={(event) => {
          handleOnChange(event.target)
          // setValueSelect(event.target.value)
        }}
        value={value || ''}
      >
        <option>Selecione uma opção</option>
        {options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
      </select>
    </Container>
  )
}