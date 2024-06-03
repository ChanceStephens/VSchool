import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const START_TIME = 20

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(START_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
}

function calculateWordCount(text) {
  const wordsArr = text.trim().split(" ")
  return wordsArr.filter(word => word !== "").length
}

function startGame() {
  setIsTimeRunning(true)
  setTimeRemaining(START_TIME)
  setText("")
  textBoxRef.current.focus()
}

function endGame() {
  setIsTimeRunning(false)
  const numWords = (calculateWordCount(text))
  setWordCount(numWords)
}
useEffect(() => {
  if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
          setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0){
      endGame()
  }
}, [timeRemaining, isTimeRunning])



  console.log(text)
  return (
    <>
    <h1>VSchool Speed Typing App</h1>
    <textarea
      ref={textBoxRef}    
      onChange={handleChange}
      value={text}
      disabled={!isTimeRunning}/>
    <h4>Time Left: {timeRemaining} </h4>
    <button 
    onClick={startGame}
    disabled={isTimeRunning}
    >
      Start!</button> {/*Anonymous function to run a function*/}
    <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
