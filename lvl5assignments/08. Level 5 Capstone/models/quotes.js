const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quotesSchema = new Schema ({
    q: String,
    a: String, 
    c: String,
    h: String
})

module.exports = mongoose.model("Quotes", quotesSchema)