const express = require('express')
const candiesRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const candies = [
    {
      "_id": uuidv4(),
      "name": "Snickers",
      "hasCaramel": true,
      "hasNuts": true,
      "invented": "1930"
    }
    // {
    //   "_id": uuidv4(),
    //   "name": "KitKat",
    //   "hasCaramel": false,
    //   "hasNuts": false,
    //   "invented": "1935"
    // },
    // {
    //   "_id": uuidv4(),
    //   "name": "Butterfinger",
    //   "hasCaramel": true,
    //   "hasNuts": true,
    //   "invented": "1923"
    // },
    // {
    //   "_id": uuidv4(),
    //   "name": "Milky Way",
    //   "hasCaramel": true,
    //   "hasNuts": false,
    //   "invented": "1923"
    // },
    // {
    //   "_id": uuidv4(),
    //   "name": "Twix",
    //   "hasCaramel": true,
    //   "hasNuts": false,
    //   "invented": "1967"
    // }
  ]

//      Middleware to add a new property to the request body
candiesRouter.use("/", (req, res, next) => {
    req.newProp = { price: 1.00 };            // Add a new property 'price' to the request object
    next();                                   // Pass control to the next Route
});

//      Route to get candies
candiesRouter.get("/", (req, res) => {
    res.send(candies);
});

//      Route to update the price of the candy
candiesRouter.put("/", (req, res) => {
  candies[0] = { ...candies[0], ...req.newProp }; // Merge the existing candy object with the new price property
  res.send(candies[0]);                           // Send back the updated candy object
});





module.exports = candiesRouter