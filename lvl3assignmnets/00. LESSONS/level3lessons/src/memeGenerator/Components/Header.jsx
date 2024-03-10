import React from 'react';
import trollFace from "../images/troll-face.png"

export default function Header() {
    return(
        <div className='Header'>
            <div className='Header--memeGenerator'>
                <img src={trollFace}/>
                <h1>Meme Generator</h1>
            </div>
            <div className='Header--reactCourse'>
                <h1>React Course - Project 3</h1>
            </div>
        </div>
    )
}