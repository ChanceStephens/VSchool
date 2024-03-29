import React from 'react'

// A simple component that simply takes a randon number and based on that number, returns a sting or "quote" as if the button is talking to the user.  This returns a button element with an event listener
export default function ButtonText() {

    const [text, setText] = React.useState("Drop the Bass")

    const randomNumber = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    const getRandomText = () => {
        const num = randomNumber()
        if (num < 10) {
            return "Try Again"
        } else if (num < 20) {
            return "That didn't Work"
        } else if (num < 30) {
            return "ERROR!"
        } else if (num < 40) {
            return "Press Harder!"
        } else if (num < 50) {
            return "You Broke it!"
        } else if (num < 60) {
            return "OUCH!"
        } else if (num < 70) {
            return "Drop the Bass"
        } else if (num < 80) {
            return "Be Gentle..."
        } else if (num < 90) {
            return "Look! It's Taylor Swift"
        } else {
            return "You Push My Buttons!"
        } 
    }
    const handleClick = () => {
        const newText = getRandomText()
        setText(newText)
    }
    return (
        <button onClick={handleClick}>{text}</button>
    )
}