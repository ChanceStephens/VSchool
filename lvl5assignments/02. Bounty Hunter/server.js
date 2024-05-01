const express = require("express")
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
const mongoose = require('mongoose')

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://chancestephens2022:"/*PASSWORD HERE*/"@cluster0.i6anwre.mongodb.net/")
        console.log("Connected to MongoDB")
    } catch {
        console.log(error)
    }
}
connectToDb()

app.use("/api/bounties", require ("./routes/bountyRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({Error_Message: err.message})
})

app.listen(9000, () => {
    console.log("The Server is running on port 9000 Agent 47")
})







