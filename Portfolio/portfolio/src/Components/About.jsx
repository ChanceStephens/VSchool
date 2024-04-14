import React from 'react';
import profilePicture from '../images/louve.jpg'

export default function About() {

    return(
        <div className='aboutMe'>
            <h1>About Me</h1>
            <p>I'm Chance, a budding Full Stack JavaScript Developer based in Las Vegas, Nevada. With a passion for tech, woodworking, travel, and problem-solving, I thrive on creative challenges and enjoy exploring new horizons in code, craftsmanship, and traveling."</p>
            <img src={profilePicture}/>
        </div>
    )
}