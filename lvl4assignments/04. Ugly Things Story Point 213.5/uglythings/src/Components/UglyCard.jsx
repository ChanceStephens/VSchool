import React from 'react';

export default function UglyCard({imgUrl, title, description}) {

    
    return(
        <li>
            <div className='uglyCard'>
                <img src={imgUrl} className='uglyCard--image'/>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </li>
    )
}


