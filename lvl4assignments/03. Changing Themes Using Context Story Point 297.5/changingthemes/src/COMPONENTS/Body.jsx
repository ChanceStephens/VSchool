import React,{ useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export default function Body(props) {

    const {mode, direction, handleSelection } = useContext(ThemeContext)

    return (
        <div className={`${mode}-main`}>
            <div className={`${direction}-main`}>
            <h1>Select option to toggle the view settings</h1>
                <form>
                <label htmlFor="themes" id="themes">Themes: </label>                    
                <select id="themes" className={`${mode}-select`} onChange={handleSelection}>
                        <option>Dark Mode and Horizontal View</option>
                        <option>Light Mode and Horizontal View</option>
                        <option>Dark Mode and Vertical View</option>
                        <option>Light Mode and Vertical View</option>
                    </select>
                </form>
            </div>

        </div>

    )
}

