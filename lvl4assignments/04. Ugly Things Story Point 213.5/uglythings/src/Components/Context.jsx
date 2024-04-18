import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

/* REQUIREMENTS
  A. [x] Must have 3 input fields:
      1. [x] Img url field (A url to an image of an ugly thing)
      2. [x] Title field (The title of the image that the user wants to give)
      3. [x] Description field (why the user thinks it is ugly)
  B. [x] Must have *Submit* button that submits the data
  C. [x] Must display a list of posted images with their associated titles and descriptions
  D. [x] Must store the array of ugly thing objects in the Context store
  E. [x] Must be able to delete an ugly thing
  F. [x] Must be able to edit an ugly thing
  G. [x] Must make all requests via the [Ugly Things API](https://coursework.vschool.io/ugly-things-api-documentation/)
  H. [] Have 3 images horizontally on each row
  I. [] Allow each image to have one or more user-submitted comments
  J. [] Allow the ability to delete specific comments
*/

export const UglyThingsContext = createContext()

export const UglyThingsProvider = ({ children }) => {
    const [uglyCards, setUglyCards] = useState([])

    useEffect(() => {
        getUglyThings()
    }, [])

    const getUglyThings = () => {
        axios.get('https://api.vschool.io/chancestephens/thing/')
            .then(response => {
                setUglyCards(response.data)
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = (newUglyThing) => {
        axios.post('https://api.vschool.io/chancestephens/thing/', newUglyThing)
            .then(response => {
                console.log('Post request successful:', response.data)
                getUglyThings()
            })
            .catch(error => {
                console.error('Error making post request:', error)
            })
    }

    const deleteUglyThing = (id) => {
        axios.delete(`https://api.vschool.io/chancestephens/thing/${id}`)
            .then(response => {
                console.log('UglyCard deleted successfully', response.data)
                getUglyThings()
            })
            .catch(error => {
                console.log('Error Deleting UglyCard', error)
            })
    }

    const editUglyThing = (id, updatedUglyThing) => {
        axios.put(`https://api.vschool.io/chancestephens/thing/${id}`, updatedUglyThing)
            .then(response => {
                console.log('Ugly Card Updated Successfully', response.data)
                getUglyThings()
            })
            .catch(error => {
                console.error('Error Updating UglyCard', error)
            })
    }

    return (
        <UglyThingsContext.Provider value={{
            uglyCards,
            handleSubmit,
            deleteUglyThing,
            editUglyThing,
            getUglyThings
        }}>
            {children}
        </UglyThingsContext.Provider>
    )
}
