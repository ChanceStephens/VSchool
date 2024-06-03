import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext' // Import the context
import {useNavigate} from 'react-router-dom'; 

export default function LosAngelesChargers({ teamId }) {
    const { teamDetails } = useContext(AppContext); // Accessing team details from the context
    const franchiseDetails = teamDetails[teamId]; // Using the passed teamId to get specific team details

    if (!franchiseDetails) {
        return <div>Loading...</div>;
    }
    return (

        <div className={franchiseDetails.slug}>
        <div className='teamContainer' 
                style={{
                    backgroundImage: `linear-Gradient(to bottom, #${franchiseDetails.alternateColor}, #${franchiseDetails.color}, #${franchiseDetails.alternateColor})`,
                    backgroundSize: 'cover',
                    backgroundPosition: `center`,
                    backgroundRepeat: 'repeat',
                    width: '100%',
                    height: "auto",
                    overflow: 'hidden', // Ensure no overflow
                }}
                >
            <div className="logoContainer" 
                    style={{backgroundImage: `url(${franchiseDetails.logos[0].href})`,
                    backgroundSize: 'contain',
                    backgroundPosition: `center`,
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                }}
                    >
                <h1 className='pageTitle' style={{
                    color:`#${franchiseDetails.alternateColor}`,
                    WebkitTextStroke: `3px #${franchiseDetails.color}`, color: `#${franchiseDetails.alternateColor}`
                }}>{franchiseDetails.displayName}</h1>
                <div className="imageContainer">
                    <img className='sideImage'src={franchiseDetails.logos[0].href}/>
                    <img src="https://www.barrystickets.com/blog/wp-content/uploads/2023/04/Best-Seats-at-the-Los-Angeles-Chargers-Stadium.jpg"/>
                    <img className='sideImage'src={franchiseDetails.logos[0].href}/>
                </div>
                <div className="teamLinks">
                    <a href={franchiseDetails.links[0].href} >ESPN Club House</a>
                    <a href={franchiseDetails.links[1].href} >Team Roster</a>
                    <a href={franchiseDetails.links[2].href} >Team Stats</a>
                    <a href={franchiseDetails.links[3].href} >Team Schedule</a>
                    <a href={franchiseDetails.links[5].href} >Get tickets</a>
                </div>
            </div>

        </div>
        </div>
    );
}