// AddMovieForm Component

// Step 13: Define the AddMovieForm component
//    This step is completed in the separate AddMovieForm component file.

import React, { useState } from 'react'

export default function AddMovieForm(props) {
    // Step 14: Initialize form inputs state
    //    1. Initialize state variable for form inputs
    const initInputs = { title: props.title || "", genre: props.genre || ""}
    const [inputs, setInputs] = useState(initInputs)

    // Step 15: Define handleChange function
    //    1. Define handleChange function to update form inputs
    function handleChange(e){
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }

    // Step 16: Define handleSubmit function
    //    1. Define handleSubmit function to handle form submission
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    // Step 17: Render the form
    //    1. Render the form with input fields and submit button
    return (
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="title" 
              value= {inputs.title}
              onChange={handleChange} 
              placeholder="Title"/>
            <input 
              type="text" 
              name="genre" 
              value={inputs.genre} 
              onChange={handleChange} 
              placeholder="Genre"/>
            <button>{props.btnText}</button>
        </form>
    )
}


