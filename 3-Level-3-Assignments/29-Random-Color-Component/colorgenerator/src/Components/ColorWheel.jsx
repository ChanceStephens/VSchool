import React from 'react'

export default function ColorWheel({colorName, colorHex, colorRGB}) {
    // console.log(color)
    return (
        <div >
           <div className='box' style={{backgroundColor: colorHex}}>
                <p>Color Name: {colorName.toUpperCase()}</p>
                <p>Color Hex Code: {colorHex}</p>
                <p>Color RGB Code: {colorRGB.toUpperCase()}</p>
           </div>
        </div>
    )
}