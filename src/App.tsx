import { BrowserRouter } from "react-router-dom"
import { Container } from "./components/layout/Container"
import { Header } from "./components/layout/Header"
import { AppRoutes } from "./routes"
import { GlobalStyle } from "./styles/GlobalStyle"



function App() {

  return (
    <BrowserRouter>
      <Header />
        <Container>
          <AppRoutes />
        </Container>
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App

