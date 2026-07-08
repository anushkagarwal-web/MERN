import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
