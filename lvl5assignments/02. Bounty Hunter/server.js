const express = require("express")
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.listen(9000, () => {
    console.log("The Server is running on port 9000 Agent 47")
})

app.use("/api/bounties", require ("./routes/bountyRouter"))


// Code Transferred to bounterRouter.js
// app.listen(9000, () => {
//     console.log("The Server is running on port 9000")
// })
//GET ALL
// app.get("/bounties", (req, res) => {
//     res.send(bounties)
// })
//GET ONE
// app.get("/bounties/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })
//ADD ONE
// app.post("/bounties/:bountyId", (req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     res.send(`Successfully added ${newBounty.firstName} to the Database!`)
// })
//DELETE ONE
// app.delete("/bounties/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId                                    //  This line extracts the bountyId parameter from the URL parameters sent with the request.
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)    //  This line finds the index of the bounty with the specified ID in the bounties array.
//     const deletedBounty = bounties.splice(bountyIndex, 1)
//     res.send(deletedBounty)
// })
//UPDATE ONE
// app.put("/bounties/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
//     res.send(updatedBounty)
// })




