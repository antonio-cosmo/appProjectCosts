import { Input } from '../layout/form/Input';
import { Select } from '../layout/form/Select';
import { Form } from './style';
import { SubmitButton } from '../layout/form/SubmitButton';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Api } from '../../services/api';

type ProjectFormProps = {
  btnText: string,
  handleSubmit: (project: Project) => Promise<void>,
  projectData?: Project,
}

type Category = {
  id: number,
  name: string,
}

type Project = {
  id: string
  cost: number,
  services: Service[],
  name: string,
  budget: string,
  category: {
    id: string,
    name: string,
  },
}

type Service ={
  id:string, 
  name:string, 
  cost:string, 
  description:string, 
}
export function ProjectForm({ btnText, handleSubmit, projectData }: ProjectFormProps) {

  const [categories, setCategories] = useState<Category[]>([]);
  const [project, setProject] = useState<Project>(()=>{
    if(projectData) return projectData;
    return ({} as Project)
  });
 
  useEffect(() => {

    Api.get('categories').then(res => {
      setCategories(res.data)
    })
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

  const submit = async (e: FormEvent) => {

    e.preventDefault();
    await handleSubmit(project);

  };

  return (
    <Form onSubmit={submit}>
      <Input
        type="text"
        name="name"
        text="Nome do projeto"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget}
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