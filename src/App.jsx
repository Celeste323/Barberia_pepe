import { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main/>
      <Footer />
    </div>
  )
}

export default App