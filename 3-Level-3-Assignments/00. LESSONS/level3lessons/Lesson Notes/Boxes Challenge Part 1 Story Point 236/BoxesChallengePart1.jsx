import React from "react"
import boxes from "./boxes"
import Box from './Components/Box'

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    const toggle = () => {
        console.log("Clicked")
      }
      

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on}
            toggle={toggle}
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}

                                                                               
// const [on, setOn] = React.useState(props.on)
 
// const eventHandler = () => {
//     setOn(prevOn => !prevOn)
// }