import React, { useState } from 'react'

const ThemeContext = React.createContext() 

function ThemeContextProvider(props) {

    const [mode, setMode] = useState("dark")
    const [direction, setDirection] = useState("horizontal")
    
    const handleSelection = (event) => {
        const selectedOption = event.target.value
        if (selectedOption === "Light Mode and Vertical View") {
            setMode("light")
            setDirection("vertical")
            console.log("light and vertical")
        } else if (selectedOption === "Light Mode and Horizontal View") {
            setMode("light")
            setDirection("horizontal")
            console.log("light and horizontal")
        } else if (selectedOption === "Dark Mode and Vertical View") {
            setMode("dark")
            setDirection("vertical")
            console.log("dark and vertical")
        } else if (selectedOption === "Dark Mode and Horizontal View") {
            setMode("dark")
            setDirection("horizontal")
            console.log("dark and horizontal")
        }
    }
        return (
        <ThemeContext.Provider value={{
            mode: mode,
            direction: direction,
            handleSelection: handleSelection
          }}>
            {props.children}
          </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}



