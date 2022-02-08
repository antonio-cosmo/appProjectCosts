import {Route, Routes} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Company} from '../pages/Company';
import {Contact} from '../pages/Contact';
import {NewProject} from '../pages/NewProject';
import { Project } from '../pages/Project';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/company' element={<Company/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/newproject' element={<NewProject/>} />
      <Route path='/project' element={<Project/>} />
    </Routes>
  )
}