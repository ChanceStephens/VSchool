import React, {  useContext } from 'react'
import {ThemeContext} from './ThemeContext'

export default function NavBar() {

    const {mode, direction} = useContext(ThemeContext)
    
    return (
        <div className={`${mode}-navBar`}>
            <div className={`${direction}-navBar`}>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>
        </div>
    )
}

