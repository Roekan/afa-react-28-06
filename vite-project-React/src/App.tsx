import Home from "./pages/home/Home.tsx"
import Contacto from "./pages/contacto/Contacto"
import Proyecto from "./pages/proyectos/Proyectos"
import Header from "./commons/header/Header.tsx"
import Footer from "./commons/footer/Footer.tsx"
import { Routes,Route} from "react-router-dom"
import './App.css'


function App() {



  return (
    <>    
    <Header/>
    <Routes>
    <Route path="*" element=<h1>404</h1>/>
    <Route path="/" element={<Home />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/proyecto" element={<Proyecto />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
