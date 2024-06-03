
import React, { useContext, useState } from 'react'
import { UglyThingsContext } from './Context'
import EditUglyForm from './EditUglyForm'
import UglyCommentForm from './UglyCommentForm'
import UglyCommentList from './UglyCommentList'

export default function UglyCard({ id, imgUrl, title, description }) {
    const { deleteUglyThing, editUglyThing } = useContext(UglyThingsContext)
    const [isEditing, setIsEditing] = useState(false)
    const [isCommenting, setIsCommenting] = useState(false)
    const [comments, setComments] = useState([])

    const [editedUglyCard, setEditedUglyCard] = useState({
        imgUrl: '',
        title: '',
        description: ''
    })

    const handleDelete = () => {
        deleteUglyThing(id)
    }

    const handleEdit = () => {
        setIsEditing(true)
        setIsCommenting(false)
        setEditedUglyCard({
            imgUrl,
            title,
            description
        })
    }

    const handleSaveEdit = () => {
        editUglyThing(id, editedUglyCard)
        setIsEditing(false)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setEditedUglyCard(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleToggleComment = () => {
        setIsCommenting(!isCommenting)
    }

    const handleCommentSubmit = (comment) => {
        setComments([...comments, comment])
        setIsCommenting(false)
    }

    const handleCommentDelete = (index) => {
        // Remove the comment at the specified index from the comments list
        setComments(comments.filter((_, i) => i !== index))
    }

    return (
        <li>
            {isEditing ? (
                <EditUglyForm
                    initialFormData={{ id, ...editedUglyCard }}
                    onSave={handleSaveEdit}
                    handleChange={handleChange}
                />
            ) : (
                <div className='uglyCard' id={id}>
                    <h1>{title}</h1>
                    <img src={imgUrl} className='uglyCard--image' alt={title} />
                    <p>{description}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    {isCommenting ? (
                        <UglyCommentForm onSubmit={handleCommentSubmit} />
                    ) : (
                        <button onClick={handleToggleComment}>Leave Comment</button>
                    )}
                    <UglyCommentList comments={comments} onDelete={handleCommentDelete} />
                </div>
            )}
        </li>
    )
}
