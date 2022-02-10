import { Input } from '../layout/form/Input';
import { Select } from '../layout/form/Select';
import {Form} from './style';
import { SubmitButton } from '../layout/form/SubmitButton'

type ProjectFormProps = {
  btnText: string
}
export function ProjectForm({ btnText }:ProjectFormProps) {
  return (
    <Form>
      <Input
        type="text"
        name="name"
        text="Nome do projeto"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </Form>
  )
}