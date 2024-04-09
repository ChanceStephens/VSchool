import React from 'react'
import trollFace from '../Images/trollFace.png'
export default function Header() {

    return (
        <>
        <header>
            <img src={trollFace} className='originalLogo' />
            <h1>Memer's Paradise Meme Generator</h1>
            <img src={trollFace} className='reversedLogo'/>
        </header>
        </>
    )
}