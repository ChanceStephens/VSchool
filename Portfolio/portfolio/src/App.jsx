import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {


  return (
    <>
      <Header/>
      <Projects/>
      <About/>    
      <Contact/>  

    </>
  )
}

export default App
