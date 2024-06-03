import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import ColorGradientDisplay from './Components/ColorGradientDisplay'
import ColorSelector from './Components/ColorSelector'
import ColorBox from './Components/ColorBox'
import ColorSelectionOutput from './Components/ColorSelectionOutput'
import './App.css'

function App() {

  const [color1, setColor1] = useState('#000000')
  const [color2, setColor2] = useState('#000000')
  const [gradient, setGradient] = useState(0)
  
  
  const handleColor1Change = (event) => {
    setColor1(event.target.value)
  }
  const handleColor2Change = (event) => {
    setColor2(event.target.value)
  }
  const handleGradientChange = (event) => {
    setGradient(event.target.value)
  }

  return (

    <div className='myApp'>
      <div className='inBetween'>
    <ColorBox style={{background: `linear-gradient(${gradient}deg, ${color1}, ${color2})`}}/>
    <ColorSelectionOutput value={`background: linear-gradient(${gradient}deg, ${color1}, ${color2})`}/>
    <ColorSelector 
      changeColor1={handleColor1Change}
      changeColor2={handleColor2Change}
      changeGradient={handleGradientChange}
      />
      </div>
    </div>
  )
}

export default App
