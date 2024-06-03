const express = require('express')
const userDataRouter = express.Router()
const UserData = require('../models/usersData')

//GETALL
userDataRouter.get('/', async (req, res, next) => {
    try {
        const userData = await UserData.find();
        return res.status(200).send(userData)
    } catch (error) {
        next(error)
    }
})
//GETONE
userDataRouter.get("/:userDataId", async (req, res, next) => {
    try {
        const foundItem = await UserData.findOne({ _id: req.params.userDataId })
        return res.status(200).send(foundItem);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

//POST
userDataRouter.post("/", async(req, res, next) => {
    try {
        const newuserData = new UserData(req.body)
        const savedUserData = await newuserData.save()
        return res.status(201).send(savedUserData)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
//PUT
userDataRouter.put("/:userDataId", async (req, res, next) => {
    try {
        const updatedUserData = await UserData.findOneAndUpdate(
            { _id: req.params.userDataId },
            req.body,
            { new: true }
        ).exec();
        return res.status(200).send(updatedUserData);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});
//DELETE
userDataRouter.delete("/:userDataId", async (req, res, next) => {
    try {
        const deletedItem = await UserData.findOneAndDelete({ _id: req.params.userDataId }).exec();
        return res.status(200).send(`Successfully deleted item from the database`);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});
module.exports = userDataRouter