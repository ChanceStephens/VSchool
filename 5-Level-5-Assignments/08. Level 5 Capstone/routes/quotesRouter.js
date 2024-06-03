const express = require('express');
const quoteRouter = express.Router();
const Quote = require('../models/quotes');

quoteRouter.get("/", async (req, res, next) => {
    try {
        const quotes = await Quote.find()
        return res.status(200).send(quotes);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

module.exports = quoteRouter;