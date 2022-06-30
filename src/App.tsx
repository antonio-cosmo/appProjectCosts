import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import { Content } from './styles/Content'
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Content>
          <AppRoutes />
        </Content>
        <Footer />
        <ToastContainer autoClose={2000} />
        <GlobalStyle /> 
      </BrowserRouter>
    </>

  )
}

export default App

