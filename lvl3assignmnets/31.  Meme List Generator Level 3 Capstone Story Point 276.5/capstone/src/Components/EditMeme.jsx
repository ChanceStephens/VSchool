import React, { useState } from 'react';

export default function EditMeme({ meme, onSaveEdit }) {                          // Pass props from parent app to use in child app
  const [editedMemeText, setEditedMemeText] = useState(meme.memeText);            // create a state initialized with 'meme.memeText'

  const handleChange = (event) => {// Define handleChange function to handle input change events
    const { name, value } = event.target;// Destructure 'name' and 'value' from the input element
    setEditedMemeText(prevMemeText => ({// Update 'editedMemeText' state using a function to ensure previous state is properly accessed
      ...prevMemeText,// Spread previous state to preserve other properties
      [name]: value// Update the property with the provided 'name' dynamically
    }));
  }

  const handleSave = () => {// Define handleSave function to handle save action
    onSaveEdit(editedMemeText);// Call onSaveEdit prop function with editedMemeText as an argument
  }

  return (
    <div className='editMeme'>                                                  {/* Render a div with class 'editMeme*/}
      <h2>Edit Meme</h2>
      <div className='editMeme--inputs'>                                        {/* // Render a div with class 'editMeme--inputs' */}
        <div className="editMeme--imageContainer">                              {/* // Render a div with class 'editMeme--imageContainer'*/}
          <img src={meme.meme.url} alt="Meme" />                                {/* // Render an image with src from 'meme.meme.url' and alt text 'Meme'*/}
          <div className="editMeme--textContainer">                             {/* Render a div with class 'editMeme--textContainer'*/}
            <p className="editMeme--topText">{editedMemeText.topText}</p>       {/* // Render a paragraph with class 'editMeme--topText' displaying edited top text*/}
            <p className="editMeme--bottomText">{editedMemeText.bottomText}</p> {/*  Render a paragraph with class 'editMeme--bottomText' displaying edited bottom text*/}
          </div>
        </div>
        <input
          type="text"                       // Set input type to text
          name="topText"                    //Set input name to 'topText'
          id='topText'                      //Set input id to 'topText'
          placeholder='Top Text'            //Set input placeholder text
          onChange={handleChange}           //Call handleChange function on input change event
          value={editedMemeText.topText}    //Set input value to edited top text
        />
        <input
          type="text"                       //Set input type to text
          name="bottomText"                 //Set input name to 'bottomText'
          id='bottomText'                   //Set input id to 'bottomText'
          placeholder='Bottom Text'         //Set input placeholder text
          value={editedMemeText.bottomText} //Set input value to edited bottom text
          onChange={handleChange}           //Call handleChange function on input change event
        />
        <button
          onClick={handleSave}              //Call handleSave function on button click event
          className='submitTextButton'>     {/* Set button class to 'submitTextButton'*/}
          Save Edit
        </button>
      </div>
    </div>
  );
}
