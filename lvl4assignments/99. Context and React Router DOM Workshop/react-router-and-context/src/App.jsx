import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import Todos from './components/Todos'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className={'light'}>
      <Navbar />
      <Home />
      <Form />
      <Todos />
    </div>
  )
}

export default App
