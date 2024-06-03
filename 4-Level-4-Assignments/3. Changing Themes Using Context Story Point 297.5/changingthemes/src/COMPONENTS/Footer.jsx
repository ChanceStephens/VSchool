import React, {  useContext } from 'react'
import {ThemeContext} from './ThemeContext';

export default function Footer() {

    const {mode, direction} = useContext(ThemeContext)

    return (
        <div className={`${mode}-footer`}>
            <div className={`${direction}-footer`}>
                <h1>The Amazing Footer</h1>
            </div>
        </div>
    )
}

