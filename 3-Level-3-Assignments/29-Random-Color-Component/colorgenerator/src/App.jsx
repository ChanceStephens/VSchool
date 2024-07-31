import React, {useEffect, useState} from 'react'
import ColorWheel from './Components/ColorWheel'
// import ColorArray from './Components/ColorArray'
import axios from "axios"
import './App.css'

function App() {

  const [color, setColor] = React.useState(
    {
      hex:"",
      name:"",
      rgb: "",
      id:""
    })
  // const [starWarsPeople, setStarWarsPeople] = useState([])
  // const [badAss, setBadAss] = useState("")
//===================================================================================

// useEffect( () => {
//   axios.get("https://random-color.onrender.com/colors/random")
//   .then(res => setColor(res.data))
//   // .then(res => console.log(".then result", res.data))
//   .catch(error => console.log(error))
// }, [])

  const handleClick = () => {
      axios.get("https://random-color.onrender.com/colors/random")
  .then(res => setColor(res.data))
  .catch(error => console.log(error))
  }
  // useEffect( () => {
  //   console.log("DID THIS WORK!")
  //   }, [] )

//   useEffect(() =>{
//     axios.get("https://swapi.dev/api/people")
//     .then(res => setStarWarsPeople(res.data.results.name))
//     .catch(error => console.log(error))
// }, [])

  // useEffect(()=> {
  //   axios.get("https://swapi.dev/api/people/1")
  //   .then(res => setBadAss(res.data))
  //   .catch(error => console.log(error))
  // }, [])
  // console.log(badAss)
//===================================================================================

/* Function to pull color from ColorArray and render to page.  API was not working at the time */
  // const randomColor = () => {
  //   const colorList = ColorArray()
  //   const randomIndex = Math.floor(Math.random() * colorList.length)
  //   const newColor = colorList[randomIndex]
  //   setColor(newColor)
  // }

console.log("color to be rendered",color.hex)
// console.log(starWarsPeople)
  return (
    <>
      <ColorWheel colorName={color.name} colorHex={color.hex} colorRGB={color.rgb}/>
      <button onClick={handleClick} style={{border: `5px solid ${color.hex}`}}>Change Background Color</button>
    </>
  )
}

export default App
