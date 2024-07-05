const mongoose = require("mongoose")
const Schema = mongoose.Schema

const testModelSchema = new Schema({
    title: {
        type: String
    }
})

module.exports = mongoose.model("TestModel", testModelSchema)