// import React from 'react'
// import ColorsArray from './ColorsArray'

// const borderSizes = ["1px", "2px", "3px", "4px", "5px", "6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px", "16px", "17px", "18px", "19px", "20px"];
// const lineTypes = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"];

// export default function BorderStyles() {
//     const [borderStyle, setBorderStyle] = React.useState([])
    
//     const generateBorderStyles = () => {
//         const colors = ColorsArray()
//         const indexRandomizer = (array) => {
//             return Math.floor(Math.random() * array.length)
//         }
//         const randomBorderSizeIndex = indexRandomizer(borderSizes)
//         const randomLineTypeIndex = indexRandomizer(lineTypes)
//         const randomColorIndex = indexRandomizer(colors)
//         const newBorderStyle = `${borderSizes[randomBorderSizeIndex]} ${lineTypes[randomLineTypeIndex]} ${colors[randomColorIndex]}`
//         return newBorderStyle
//     }

//     const handleButtonClick = () => {
//         const newBorderStyle = generateBorderStyles()
//         setBorderStyle(newBorderStyle)
//     }
//     return (
//         <div>
//             <div className="box" style={{border: borderStyle}}></div>
//             <button onClick={handleButtonClick}>Button</button>
//         </div>
//     )
// }