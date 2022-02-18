import { Input } from '../layout/form/Input';
import { Select } from '../layout/form/Select';
import { Form } from './style';
import { SubmitButton } from '../layout/form/SubmitButton';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';

type ProjectFormProps = {
  btnText: string,
  handleCreatePost: (project: Project) => void,
}

type Category = {
  id: number,
  name: string,
}

type Project = {
  cost: number,
  services: string[],
  name: string,
  value: string,
  category: {
    id: string,
    name: string,
  },
}
export function ProjectForm({ btnText, handleCreatePost }: ProjectFormProps) {

  const [categories, setCategories] = useState<Category[]>([]);
  const [project, setProject] = useState<Project>({} as Project);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      res => res.json()
    ).then(
      data => setCategories(data)
    ).catch(
      e => console.log('error')
    )
  }, []);

  const handleChange = useCallback((el: HTMLInputElement) => {

    setProject(prevProject => (
      { ...prevProject, [el.name]: el.value }
    ));

  }, []);


  const handleCategory = useCallback((el: HTMLSelectElement) => {

    setProject(prevProject => (
      {
        ...prevProject,
        category: {
          id: el.value,
          name: el.options[el.selectedIndex].text
        }
      })
    );

  }, []);

  const submit = (e: FormEvent) => {

    e.preventDefault();

    handleCreatePost(project);

  };

  return (
    <Form onSubmit={submit}>
      <Input
        type="text"
        name="name"
        text="Nome do projeto"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.value}
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.value}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </Form>
  )
}