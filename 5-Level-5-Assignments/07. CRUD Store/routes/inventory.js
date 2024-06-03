const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')
 
//GET ALL
inventoryRouter.get('/', async (req, res, next) => {
    try {
        const inventory = await Inventory.find()
        return res.status(200).send(inventory)
    } catch (error) {
        next(error)
    }
})
//GET ONE
inventoryRouter.get('/:inventoryId', async(req, res, next) => {
    Inventory.findOne({_id: req.params.inventoryId }, (err, foundItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    })
})
//POST
inventoryRouter.post('/', async(req, res, next) => {
    try {
        const newInventory = new Inventory(req.body)
        const savedItem = await newInventory.save()
        return res.status(201).send(savedItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
//PUT
inventoryRouter.put('/:inventoryId', (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new: true},
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )
})
//DELETE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {                                                                            // Console.log() Message to the console
    Inventory.findOneAndDelete({_id: req.params.inventoryId }, (err, deletedItem) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item from the database`)
    })
})

module.exports = inventoryRouter