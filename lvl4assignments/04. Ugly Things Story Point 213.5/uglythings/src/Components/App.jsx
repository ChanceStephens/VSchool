import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/App.css'
import UglyCard from './UglyCard'

/* REQUIREMENTS
  A. [x] Must have 3 input fields:
      1. [x] Img url field (A url to an image of an ugly thing)
      2. [x] Title field (The title of the image that the user wants to give)
      3. [x] Description field (why the user thinks it is ugly)
  B. [x] Must have *Submit* button that submits the data
  C. [x] Must display a list of posted images with their associated titles and descriptions
  D. [] Must store the array of ugly thing objects in the Context store
  E. [] Must be able to delete an ugly thing
  F. [] Must be able to edit an ugly thing
  G. [x] Must make all requests via the [Ugly Things API](https://coursework.vschool.io/ugly-things-api-documentation/)
  H. [] Have 3 images horizontally on each row
  I. [] Allow each image to have one or more user-submitted comments
  J. [] Allow the ability to delete specific comments
*/



export default function App() {
    const [uglyCards, setUglyCards] = useState([]);
    const [uglyCard, setUglyCard] = useState({
        title: '',
        description: '',
        imgUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUglyCard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { title, description, imgUrl } = uglyCard;
        const newUglyThing = {
            title: title,
            description: description,
            imgUrl: imgUrl
        };

        axios.post('https://api.vschool.io/chancestephens/thing/', newUglyThing)
            .then(response => {
                console.log('Post request successful:', response.data);
                // Optionally, you can reset the form fields after successful submission
                setUglyCard({
                    title: '',
                    description: '',
                    imgUrl: ''
                });
                // Fetch the updated list of ugly things after submission
                getUglyThings();
            })
            .catch(error => {
                console.error('Error making post request:', error);
            });
    };

    const getUglyThings = () => {
        axios.get('https://api.vschool.io/chancestephens/thing/')
            .then(response => {
                setUglyCards(response.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getUglyThings();
    }, []);

    return (
        <>
            <form>
                <input
                    type='text'
                    name='imgUrl'
                    value={uglyCard.imgUrl}
                    onChange={handleChange}
                    placeholder='Image url'
                    className='imageInput'
                />
                <input
                    type='text'
                    name='title'
                    value={uglyCard.title}
                    onChange={handleChange}
                    placeholder='Title'
                    className='titleInput'
                />
                <input
                    type='text'
                    name='description'
                    value={uglyCard.description}
                    onChange={handleChange}
                    placeholder='Description'
                    className='descriptionInput'
                />
                <button type='button' onClick={handleSubmit}>Submit Something Ugly</button>
            </form>
            <ol>
                {uglyCards.map((uglyThing, index) => (
                    <UglyCard
                        key={index}
                        imgUrl={uglyThing.imgUrl}
                        title={uglyThing.title}
                        description={uglyThing.description}
                    />
                ))}
            </ol>
        </>
    );
}


