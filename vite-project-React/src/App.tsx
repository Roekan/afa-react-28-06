import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  const Home = () =><h1>Home</h1>;
  const Contacto = () =><h1>Contacto</h1>;
  const Proyecto = () =><h1>Proyecto</h1>;

  return (
    <>
      
      <Home/>
      <Contacto/>
      <Proyecto/>

    </>
  )
}

export default App
