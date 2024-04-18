// UglyCommentList.js
import React from 'react';

export default function UglyCommentList({ comments, onDelete }) {
    const handleDelete = (index) => {
        // Call the onDelete function with the index of the comment to be deleted
        onDelete(index);
    };

    return (
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>
                    {comment}
                    {/* Render a delete button for each comment */}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
