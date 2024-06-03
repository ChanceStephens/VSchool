import React from 'react';
import memeProjectImage from '../images/capstonelvl3Sample.png'
import memeCollectionImage from '../images/capstonelvl3Collection.png'

export default function Projects() {

    return(
        <div className='myProjects'>
            <h1>Meme Generator</h1>
            <div className='myProjectInnerContainer'>
                <p>"Memer's Paradise: A React-powered meme generator where users can easily add custom captions to pre-loaded images, fostering creativity and humor in meme creation."</p>
            </div>
            <div className='imageContainer'>
                <img src={memeProjectImage} />
                <p>Have a random meme image generate and use your wit to create a meme.</p>
            </div>
            <div className='imageContainer'>
                <img src={memeCollectionImage} />
                <p>As a user, you can save your memes to a collection where you can edit or delete them.</p>
            </div>

        </div>
    )
}