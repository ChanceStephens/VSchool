// AIRBNB APP HERO FILE ===========================>

import React from "react"
import photoGrid from "/home/chance/VSchool/Assignments/lvl3assignmnets/00. AirBnB/app/src/images/photo-grid.png"
export default function Hero() {
    return (
        <section className="hero">
            <img src={photoGrid} />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}