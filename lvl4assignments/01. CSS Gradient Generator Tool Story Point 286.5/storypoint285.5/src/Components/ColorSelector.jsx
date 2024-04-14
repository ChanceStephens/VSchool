import React from 'react'

export default function ColorSelector({changeColor1, changeColor2, changeGradient, color1, color2}) {
     
    return (
        <>
      <form className='colorGradientForm'>
      <label htmlFor="color1">First Color Selection</label>
      <p>{color1}</p>
        <input 
            type='color'
            id='color1'
            name='color1'
            value={color1}  
            onChange={changeColor1}  
        />
        <label htmlFor="color2">Second Color Selection</label>
        <p>{color2}</p>
        <input 
            type='color'
            id='color2'
            name='color2'
            value={color2}  
            onChange={changeColor2}  
        />
        <label htmlFor="gradientAngle">Gradient Angle</label>
        <input 
            type='text' 
            id='gradientAngle' 
            name='gradientAngle'
            onChange={changeGradient}
        />
      </form>
        </>
    )
}