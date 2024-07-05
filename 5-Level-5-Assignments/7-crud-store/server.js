/*========|ASSIGNMENT REQUIREMENTS|========/
[x]Build a new server 
[x]Connect it to mongodb.
[x]Create a folder called models
    [x]Create a file called inventory.js
        [x]Define an InventorySchema
        [x]Export InventoryModel
[x]Create a folder called routes
    [x]Createfile inventory.js
x[]Create all the necessary routes to make a fully CRUD application 
    [x]GET
    [x]GET ONE
    [x]POST
    [x]PUT
    [x]DELETE
*/
const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
const mongoose = require('mongoose')

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://chancestephens2022:"/*PASSWORD HERE*/"@cluster0.i6anwre.mongodb.net/")   
        console.log("Connected to the MongoDB")
       } catch (error) {
           console.log(error)
       }
}
connectToDb()

app.use('/inventory', require('./routes/inventory'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ErrorMessage: err.message})
})

app.listen(9000, () => {
    console.log("Your Server is up and running on Port 9000, Sir!")
})