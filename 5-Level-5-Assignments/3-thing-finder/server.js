const express = require('express')
const app = express()

app.listen(9000, () => {
    console.log("The Server is running on Port 9000 Bruh!")
})

app.use(express.json())
app.use("/teams", require ('.//routes/teamsRouter'))