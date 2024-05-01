const express = require('express') 
const bountyRouter = express.Router()
const Bounty = require('../model/bountyModel')


 const bounties = [
    {
        firstName: 'Darth',
        lastName: 'Maul',
        living: false,
        bountyAmount: 1000000,
        type: 'Sith'
    },
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 500000,
        type: 'Jedi'
    },
    {
        firstName: 'Count',
        lastName: 'Dooku',
        living: false,
        bountyAmount: 750000,
        type: 'Sith'
    },
    {
        firstName: 'Obi-Wan',
        lastName: 'Kenobi',
        living: false,
        bountyAmount: 800000,
        type: 'Jedi'
    },
    {
        firstName: 'Kylo',
        lastName: 'Ren',
        living: false,
        bountyAmount: 900000,
        type: 'Sith'
    },
    {
        firstName: 'Rey',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 600000,
        type: 'Jedi'
    },
    {
        firstName: 'Palpatine',
        lastName: 'Unknown',
        living: true,
        bountyAmount: 2000000,
        type: 'Sith'
    },
    {
        firstName: 'Yoda',
        lastName: 'Unknown',
        living: false,
        bountyAmount: 1000000,
        type: 'Jedi'
    },
    {
        firstName: 'Darth',
        lastName: 'Bane',
        living: true,
        bountyAmount: 3000000,
        type: 'Sith'
    },
    {
        firstName: 'Anakin',
        lastName: 'Skywalker',
        living: false,
        bountyAmount: 1500000,
        type: 'Sith'
    },
    {
        firstName: 'Ahsoka',
        lastName: 'Tano',
        living: true,
        bountyAmount:750000,
        type: 'Jedi'
    }
];



//GET ALL
bountyRouter.get("/", async (req, res, next) => {
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    } catch (error) {
        next (error)
    }
})

//GET ONE
bountyRouter.get("/:bountyId", (req, res) => {
    bounty.findOne({_id: req.params.bountyId}, (err, foundItem) => {
        if (err) {
            res.status(500)
            return next (err)
        }
        return res.status(200).send(foundItem)
    })
})

//ADD ONE 
bountyRouter.post('/', async(req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedItem = await newBounty.save()
        return res.status(201).send(savedItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//DELETE ONE
bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId }, (err, deletedItem) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item from the database`)
    })
})

//UPDATE ONE
bountyRouter.put("/:bountyId", (req, res) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter
