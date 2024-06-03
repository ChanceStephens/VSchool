import React from 'react'

export default function MemeGenerator(props) {                                             // props being passed: onClick, value

    return (
    <div className='currentMeme'> 
        <div className='currentMemeContainer'>
            <img className='currentMemeImage'src={props.src.url}/>                          {/* Render random meme image */}
            <div className="currentMemeText currentTop">{props.value.topText}</div>         {/* Render top text input */}
            <div className="currentMemeText currentBottom">{props.value.bottomText}</div>   {/* Render bottom text input */}
        </div>                                              
            <button 
            onClick={props.onClick}                                                         // event handler for the click event passed from the parent App
            className='currentMemeImageRefresh'>Refresh Image                               
        </button>                                                                           {/* Button that generates new meme image */}
    </div>
    )
}
