const express = require('express')
const app = express()

app.listen(9000, () => {
    console.log("The Server is up and running on Port 9000, Sir Chance-A-Lot")
})

app.use(express.json())

app.use("/candies", require("./routes/candiesRouter"))



