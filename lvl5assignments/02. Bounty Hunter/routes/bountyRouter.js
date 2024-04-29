const express = require('express') 
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const bounties = [
    {
        _id: uuidv4(),
        firstName: 'Darth',
        lastName: 'Maul',
        living: false,
        bountyAmount: 1000000,
        type: 'Sith'
    },
    {
        _id: uuidv4(),
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 500000,
        type: 'Jedi'
    },
    {
        _id: uuidv4(),
        firstName: 'Count',
        lastName: 'Dooku',
        living: false,
        bountyAmount: 750000,
        type: 'Sith'
    },
    {
        _id: uuidv4(),
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        living: false,
        bountyAmount: 800000,
        type: 'Jedi'
    },
    {
        _id: uuidv4(),
        firstName: 'Kylo',
        lastName: 'Ren',
        living: false,
        bountyAmount: 900000,
        type: 'Sith'
    },
    {
        _id: uuidv4(),
        firstName: 'Rey',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 600000,
        type: 'Jedi'
    },
    {
        _id: uuidv4(),
        firstName: 'Palpatine',
        lastName: 'Unknown',
        living: true,
        bountyAmount: 2000000,
        type: 'Sith'
    },
    {
        _id: uuidv4(),
        firstName: 'Yoda',
        lastName: 'Unknown',
        living: false,
        bountyAmount: 1000000,
        type: 'Jedi'
    },
    {
        _id: uuidv4(),
        firstName: 'Darth',
        lastName: 'Bane',
        living: true,
        bountyAmount: 3000000,
        type: 'Sith'
    },
    {
        _id: uuidv4(),
        firstName: 'Anakin',
        lastName: 'Skywalker',
        living: false,
        bountyAmount: 1500000,
        type: 'Sith'
    },
    {
        _id: uuidv4(),
        firstName: 'Ahsoka',
        lastName: 'Tano',
        living: true,
        bountyAmount:750000,
        type: 'Jedi'
    }
];

//GET ALL
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

//GET ONE
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//ADD ONE 
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

//DELETE ONE
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const deletedBounty = bounties.splice(bountyIndex, 1)
    res.send(deletedBounty)
})

//UPDATE ONE
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyRouter
