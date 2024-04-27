const express = require('express')
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require('uuid') // If using uuidv4, this is needed due to the update (different from lesson)

// FAKE DATA (Not using a Database Yet...)
// Fake Data
const tvShows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { title: "Watchmen", _id: uuidv4() },
    { title: "Westworld", _id: uuidv4() },
    { title: "Friends", _id: uuidv4() }
]

tvshowRouter.get('/', (req, res) => {
    res.send(tvShows)
})

tvshowRouter.post('/', (res, req) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Successfully add ${newShow.title} to the database!`)
})

module.exports = tvshowRouter