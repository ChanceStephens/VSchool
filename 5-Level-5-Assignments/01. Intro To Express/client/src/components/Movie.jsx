// Movie Component

// Step 10: Define the Movie component


import React, { useState } from 'react'
import AddMovieForm from './AddMovieForm'

export default function Movie(props){
    // Step 11: Destructure props
    //    1. Destructure props to extract title, genre, and _id
    const { title, genre, _id } = props
    //    2. Define state variable for editToggle
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="movie">
            {/* Step 12: Conditional rendering based on editToggle state */}
            {!editToggle ?
              <>
                <h1>Title: { title }</h1>
                <p>Genre: { genre }</p>
                <button 
                  className="delete-btn"
                  onClick={() => props.deleteMovie(_id)}
                >Delete</button>
                <button 
                  className='edit-btn'
                  onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                  Edit            
                </button>
              </>
            :
              <>
                {/* 1. Render the AddMovieForm component for editing */}
                <AddMovieForm
                  title={title}
                  genre={genre}
                  btnText="Submit Edit"
                  submit={props.editMovie}
                  _id={_id}
                />
                {/* 2. Render a button to close the edit form */}
                <button
                  onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                  Close
                </button>
              </>
            }
        </div>
    )
}
