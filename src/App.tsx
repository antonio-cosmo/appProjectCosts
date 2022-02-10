import { BrowserRouter } from "react-router-dom"
import { Container } from './styles/Container'
import { Header } from "./components/layout/Header"
import { AppRoutes } from "./routes"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Footer } from "./components/layout/Footer"



function App() {

  return (
    <BrowserRouter>
      <Header />
        <Container>
          <AppRoutes />
        </Container>
      <GlobalStyle/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

