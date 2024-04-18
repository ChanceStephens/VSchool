import React, { useState, useContext } from 'react';
import { UglyThingsContext } from './Context';

export default function UglyForm() {
    const { handleSubmit } = useContext(UglyThingsContext);
    const [uglyCard, setUglyCard] = useState({
        title: '',
        description: '',
        imgUrl: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUglyCard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = () => {
        handleSubmit(uglyCard);
        setUglyCard({
            title: '',
            description: '',
            imgUrl: ''
        });
    };

    return (
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
            <button type='button' onClick={handleFormSubmit}>Submit Something Ugly</button>
        </form>
    );
}
