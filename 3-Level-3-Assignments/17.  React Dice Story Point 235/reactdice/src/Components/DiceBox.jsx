import React from "react";

const DiceBox = () =>{
    const [numbers, setNumbers] = React.useState([])
    
    const roll = () => {
        const randomNumbers = []
        for (let i = 0; i < 5; ++i) {
            const randomNumber = Math.floor(Math.random() * 6) + 1
                randomNumbers.push(randomNumber)
        }
        setNumbers(randomNumbers)
    }
    return (
        <div>
            <h1>DiceBox Component is Working</h1>
            <h1>{numbers}</h1>
            <button onClick={roll}>Roll</button>
        </div>
        )
}
export default DiceBox