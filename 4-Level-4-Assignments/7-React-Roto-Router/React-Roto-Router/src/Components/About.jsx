import React from 'react'
import marioBros from '../Images/marioandluigi.webp'
export default function About() {

    return (
        <div className="aboutUs">
        <div className="about">
        <h1>Get to Know Us!</h1>
        <img src={marioBros}/>
        </div>
        <div className="meetUs">
        <p>Meet the Team with nearly 40 years of fixing your plumbing problems!</p>
        <p>
            Mario: With his signature red cap and mustache, Mario is the heart and soul of our operation. He's the master plumber who can tackle any clog or leak with precision and skill. With a passion for problem-solving and a knack for fixing even the trickiest pipes, Mario ensures that every job is completed to perfection.
        </p>
        <p>
            Luigi: Luigi is the brains behind our business. With his keen attention to detail and analytical mind, Luigi ensures that every project runs smoothly from start to finish. From scheduling appointments to managing supplies, Luigi keeps our operations running like a well-oiled machine.
        </p>
        </div>
        </div>
    )
}