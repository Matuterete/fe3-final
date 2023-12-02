import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import { useContext } from './utils/Context'

import './App.css'

function App() {
  const { state } = useContext()
  return (
    <Router>
      <div className={`${state.theme}`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/detalle/:id' element={<Detail />} />
          <Route path='*' element={() => <h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
