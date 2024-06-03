const express = require("express")
const mongoose = require("mongoose")
const testRouter = express.Router()
const TestModel = require("../models/testModel")



testRouter.get("/", async (req, res, next) => {
    try {
        const foundTests = await TestModel.find()
        return res.status(200).send(foundTests)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

testRouter.post("/", async (req, res, next) => {
    try {
        const newTest = new TestModel(req.body)
        const savedTest = await newTest.save()
        return res.status(201).send(savedTest)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})






module.exports = testRouter