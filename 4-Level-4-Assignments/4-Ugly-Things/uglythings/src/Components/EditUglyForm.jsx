import React from 'react';

export default function EditUglyForm({ initialFormData, onSave, handleChange }) {
    const { imgUrl, title, description } = initialFormData;

    return (
        <form>
            <h4>Image URL</h4>
            <input
                type='text'
                name='imgUrl'
                value={imgUrl}
                onChange={handleChange}
                placeholder='Image url'
                className='imageInput'
            />
            <h4>Title</h4>
            <input
                type='text'
                name='title'
                value={title}
                onChange={handleChange}
                placeholder='Title'
                className='titleInput'
            />
            <h4>Description</h4>
            <input
                type='text'
                name='description'
                value={description}
                onChange={handleChange}
                placeholder='Description'
                className='descriptionInput'
            />
            <button type='button' onClick={() => onSave(initialFormData)}>Save Ugly Thing</button>
        </form>
    );
}
