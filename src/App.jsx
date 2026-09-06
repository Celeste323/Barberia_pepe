import { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import FichaDeTurno from './components/FichaDeTurno/FichaDeTurno'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main/>
      <FichaDeTurno cargando={true} />
      <FichaDeTurno error={true} />
      <FichaDeTurno turno={null} />
      <FichaDeTurno turno={{
        paciente: "Ceferino Ruiz",
        hora: "09:30",
        urgente: true,
        observaciones: "Traer estudios previos",
        sesiones: 4
      }} />
      <FichaDeTurno turno={{
        paciente: "Ana Gómez",
        hora: "10:00",
        urgente: false,
        observaciones: "",
        sesiones: 0
      }} />
      <Footer />
    </div>
  )
}

export default App