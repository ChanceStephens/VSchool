const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://chancestephens2022:KP5ADSL8SmECVjem@cluster0.i6anwre.mongodb.net/')
        console.log("Connected to the MongoDB")
    } catch {
        console.log(error)
    }
}
connectToDatabase()

app.use("/api/userData", require ("./routes/userDataRouter"))
app.use("/api/quotes", require("./routes/quotesRouter"))
app.use("/api/jokes", require("./routes/jokesRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({Error_Message: err.message})
})

app.listen(9000, () => {
    console.log("The Server is running on port 9000.")
})