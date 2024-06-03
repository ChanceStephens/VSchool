import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'

import './App.css'

export default function App() {

  return (
      <>
        <Router>
          <nav>
            <Link to="/" >Home</Link>
            <Link to="about" >About</Link>
            <Link to="services" >Services</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </Router>
      </>

  )
}