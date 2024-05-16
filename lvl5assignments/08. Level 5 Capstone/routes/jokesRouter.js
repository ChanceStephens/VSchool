const express = require('express');
const jokesRouter = express.Router();
const Jokes = require('../models/jokes');

jokesRouter.get("/", async (req, res, next) => {
    try {
        const jokess = await Jokes.find()
        return res.status(200).send(jokess);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

module.exports = jokesRouter;