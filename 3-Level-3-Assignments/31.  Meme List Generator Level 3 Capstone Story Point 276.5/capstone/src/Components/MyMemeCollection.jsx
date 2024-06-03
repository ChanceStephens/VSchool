import React from 'react';

export default function MyMemeCollection({ savedMemes, deleteMeme, editMeme }) {    //props passed savedMemes, deleteMemes, editMemes
    const handleDeleteClick = (index) => {
        deleteMeme(index);                                                          // Deletes the meme completely function                                           
    }
    const handleEditClick = (index) => {
        editMeme(index);                                                            // Edits meme function
    }
    return (
        <>
            <h2 className="collectionHeader">My Meme Collection</h2>                                                            {/* Heading For Meme Collection*/}
            <div className='savedMemeCollection'>                                                                               {/* Container for all saved memes*/}
                {savedMemes.map((savedMeme, index) => (                                                                         //  Maps over savedMemes array to create divs that render...
                    <div key={index} className='entireSavedMemeContainer'>                                                      {/* ... a unique key identifier*/}
                        <div className='savedMemeContainer'>                                                                    {/* ... a container that holds the image and top/bottom texts*/}
                            <img className='savedMemeImage' src={savedMeme.meme.url} alt="Saved Meme" />                        {/* ... the image */}
                            <div className="savedMemeText savedTop">{savedMeme.memeText.topText}</div>                          {/* ... the top text*/}
                            <div className="savedMemeText savedBottom">{savedMeme.memeText.bottomText}</div>                    {/* ... the bottom text*/}
                        </div>
                        <div className='savedMemeButtonContainer'>                                                              {/* ... a container that holds the edit and delete buttons*/}
                            <button className='savedMemeEdit' onClick={() => handleEditClick(index)}>Edit Meme</button>         {/* ... a edit button  */}
                            <button className='savedMemeDelete' onClick={() => handleDeleteClick(index)}>Delete Meme</button>   {/* ... a delete button*/}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
