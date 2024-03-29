import React from "react"
import boxes from "./boxes"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
// const dark = props.darkMode // (OPTIONAL): Create variable for darkMode that equals my prop  
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
        border: props.darkMode ? "20px double red" : "5px dotted orange"
//  Ternary Operator     prop (or my variable for the prop) now says if (prop = "true") ? (then backgroundColor is "#222222") : (else backgroundColor is "#cccccc")

    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}

                                                                               
//  Ternary Operator     prop (or my variable for the prop) now says if (prop = "true") ? (then backgroundColor is black) : (else backgroundColor is white)