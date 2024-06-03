import React,{useState}from 'react'

export default function MemeForm(props) {    // props being passed: onClick, onChange, value

    return (
        <>
    <form className='memeForm'>
        <div className='memeForm--inputs'>
          <input                              // Input field to collect Top Text data from user
            type="text"                       // Sets input type to collect text data
            name="topText"                    // provides a unique name for element
            id='topText'                      // provieds an id for the element
            placeholder='Top Text'            // previews what should appear in the text input box
            onChange={props.onChange}         // handles the change to the input field
            value={props.value.topText}       // Bind input value to memeText state
          />
          <input                              // Input field to collect Bottom Text data from user
            type='text'                       // Sets input type to collect text data
            name="bottomText"                 // provides a unique name for element
            id='bottomText'                   // provieds an id for the element
            placeholder='Bottom Text'         // handles the change to the input field
            onChange={props.onChange}         // handles the change to the input field
            value={props.value.bottomText}    // Bind input value to memeText state
          />
        </div>
          <button
            type='button' 
            className='submitTextButton' 
            onClick={props.onClick}>Submit    {/* onClick event lister that handles the submit event passed from parent component*/}
          </button>                           {/* added type='button' to Prevent form submission */}
      </form>
        </>
    )
}