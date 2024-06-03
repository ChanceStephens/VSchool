import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import airTable from '../images/airtable.png'
import vschool from '../images/vschoolLogo.png'
import light from '../images/lines5.png'

export default function NavBar() {

    return(
        <div className='navBar'>
            <div className="navBar-links">
                <nav>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/pointstrackerpage">Story Point Tracking</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/settings">Settings</Link>
                </nav>
            </div>
            <div className="navBar-bottom">
                <div className='vschool-container'>
                    <img src={vschool} className="vschool"/>
                </div>
                <div className='navBar-standUp'>
                    <img src={airTable}/>
                    <h3>Don't Forget to Submit your Daily Stand Up.</h3>
                    <a href="https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu">Click Here!</a>
                </div>
                <div className='birds-container'>
                    <img src={light} className="light"/>
                </div>
            </div>
        </div>
    )
}