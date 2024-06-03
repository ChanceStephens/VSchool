import React, { useState } from 'react';

export default function UglyCommentForm({ onSubmit }) {
    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(comment); // Pass the comment to the onSubmit function
        setComment('');// Clear the comment field after submission
    };

    return (
        <>
            <form>
                <label htmlFor="uglyComment">Comment:</label>
                <textarea
                    name="uglyComment"
                    id="uglyComment"
                    cols="50"
                    rows="4"
                    value={comment}
                    onChange={handleChange}
                ></textarea>
                <button type="button" onClick={handleSubmit}>Submit Comment</button>
            </form>
        </>
    );
}
