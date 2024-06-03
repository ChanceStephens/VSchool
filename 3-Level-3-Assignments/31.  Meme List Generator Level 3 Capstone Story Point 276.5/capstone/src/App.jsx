import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import MemeForm from './Components/MemeForm'
import MemeGenerator from './Components/MemeGenerator'
import MyMemeCollection from './Components/MyMemeCollection'
import EditMeme from './Components/EditMeme'
import axios from 'axios';
import './App.css';

function App() {
  
//==========|STATE VARIABLES|=================================================// Define state variables for meme, memeText, and savedMemes
  const [meme, setMeme] = useState('');                                       // State for random meme
  const [memeText, setMemeText] = useState({ topText: '', bottomText: '' });  // State for meme text inputs
  const [savedMemes, setSavedMemes] = useState([]);                           // State for array of saved memes
  const [selectedMemeIndex, setSelectedMemeIndex] = useState(null);           // Index of the selected meme for editing
  const [editMode, setEditMode] = useState(false);                            // Flag to indicate if edit mode is active


  //==========|FETCH RANDOM MEME IMAGE|=======================================//
  const getRandomMeme = () => {                                               // Function to fetch a random meme
    axios.get("https://api.imgflip.com/get_memes")                            // axios.get('API Web Address Here') to access database
    .then(res => {                                                            // .then(res=>{})  (((SEE .then() & res. in AppNotes)))
      const allMemes = res.data.data;                                         // creates a variable for: {memes: Array(100)}
      const allMemesIndexes = allMemes.memes;                                 // creates a variable for each meme property index
      const randomIndex = Math.floor(Math.random() * allMemesIndexes.length); // generates a random number between 0 and the length of the meme array
      const randomMeme = allMemesIndexes[randomIndex];                        // generates a random meme based on the random index of the meme array
      setMeme(randomMeme);                                                    // Updates state with random meme
    })
    .catch(error => console.log(error));                                      // .catch() (((SEE .catch() in AppNotes )))
  }
  //==========|HANDLE CHANGE EVENT FUNCTION|====================================//
  const handleChange = (event) => {                                             // Function to handle any changes when an event is triggered
    const { name, value } = event.target;                                       // destructures the code to extract the properties 'name' and 'value' from the event object (((SEE Destructuring Property in AppNotes)))
    setMemeText(prevMemeText => ({                                              // sets function to set current state with prevState as a parameter
      ...prevMemeText,                                                          // using the ...spread operator to copy, not mutate, the state and update the changes to the properties
      [name]: value                                                             // properties to be updated in the prevMemeText
    }));
  }
  //==========|SAVE CREATED MEME TO COLLECTION|=================================//
  const handleSubmit = () => {                                           
    const newlyCreatedMeme = { meme: meme, memeText: memeText}                  // Create a new meme object
    setSavedMemes([...savedMemes, newlyCreatedMeme])                            // Add the new meme object to the saved memes array
  }
  //==========|GENERATE NEW MEME FUNCTION|========================================//
  const handleGenerateButton = () => {                                          // Function to handle the "Refresh Meme Image" button
    getRandomMeme();                                                            // calls getRandomMeme function to "refresh" meme image on click event
  }
  //==========|USEEFFECT WITH EMPTY ARRAY|======================================//
  useEffect(() => {                                                             // The function passed to useEffect will be executed after every render of the component.
    getRandomMeme();                                                            // calls the getRandomMeme function
  }, []);                                                                       // Having an empty array of dependencies,makes the useEffect only run once after the initial render
  
  //==========|ENABLE EDIT MEME MODE|===========================================//
  const handleEditMeme = (index) => {
    setSelectedMemeIndex(index);                                                // Set the index of the selected meme
    setEditMode(true);                                                          // Enable edit mode
  }
  //==========|EDIT SAVED MEME|=================================================//
  const handleSaveEdit = (editedMemeText) => {                  // Define a function named handleSaveEdit which takes 'editedMemeText' as an argument
    const updatedMemes = [...savedMemes];                       // Create a copy of the 'savedMemes' array using the spread operator
    updatedMemes[selectedMemeIndex].memeText = editedMemeText;  // Update the memeText property of the selected meme with the edited text
    setSavedMemes(updatedMemes);                                // Update the state variable 'savedMemes' with the updatedMemes array
    setEditMode(false);                                         // Set the edit mode to false to disable editing after saving
    setSelectedMemeIndex(null);                                 // Reset the selected meme index to null
  }
  //==========|DELETE SAVED MEME|===============================================//
  const handleDeleteMeme = (index) => {       // Define a function named handleDeleteMeme which takes 'index' as an argument
    const updatedMemes = [...savedMemes];     // Create a copy of the 'savedMemes' array using the spread operator
    updatedMemes.splice(index, 1);            // Remove one element at the specified 'index' from the 'updatedMemes' array
    setSavedMemes(updatedMemes);              // Update the state variable 'savedMemes' with the updatedMemes array (i.e., remove the meme at the specified index)
  }
  
  return (
    <>
    <Header />
    <MemeForm 
      onClick={handleSubmit} 
      onChange={handleChange} 
      value={memeText}
      />
    <MemeGenerator 
      onClick={handleGenerateButton} 
      value={memeText} src={meme}
    />
    {editMode ? (
    <EditMeme 
      meme={savedMemes[selectedMemeIndex]}
      onSaveEdit={handleSaveEdit}
      onChange={handleChange}
    />
    ) : (
      <MyMemeCollection 
        savedMemes={savedMemes} 
        editMeme={handleEditMeme} 
        deleteMeme={handleDeleteMeme} 
      />
    )}
    </>
  );
}

export default App;
