import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Company } from '../pages/Company';
import { Contact } from '../pages/Contact';
import { NewProject } from '../pages/NewProject';
import { Projects } from '../pages/Projects';
import { EditeProject } from '../pages/EditeProject';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/company' element={<Company />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/newproject' element={<NewProject />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/editeproject/:id' element={<EditeProject/>} />
    </Routes>
  )
}