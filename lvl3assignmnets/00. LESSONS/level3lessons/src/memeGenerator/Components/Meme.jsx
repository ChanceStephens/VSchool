import React, { useState } from "react";
import memesData from "../memesData";
 
export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "https://clideo.com/files/content/twitter-meme-maker-1.png" //'https://i.imgflip.com/26br.jpg'
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [memeImage, setMemeImage] = useState('');

    function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: memesArray[randomNumber].url
    }))
    // const url = memesArray[randomNumber].url
    // setMemeImage(url)
    // console.log(setMemeImage(url))
    } 
    return (
        <div className="Meme">

            <div className="memeGeneratorForm">
                <input 
                    type='text' 
                    name='topText' 
                    id='topText' 
                    placeholder='Top Text'>
                </input>
                <input 
                    type='text' 
                    name='bottomText' 
                    id='bottomText' 
                    placeholder='Bottom Text'>
                </input>
                <button
                className="memeGeneratorForm--button"
                onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button> 
            </div> 
            <img src={meme.randomImage}/>
        </div>
    )
}