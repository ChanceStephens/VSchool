const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jokesSchema = new Schema ({
    joke: String
})

module.exports = mongoose.model("Jokes", jokesSchema)