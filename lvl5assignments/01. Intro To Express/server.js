//=================================|SETUP|======================================//
//      1. Install Express  
//          a. npm init -y    (quick version to say yes to all queries)
//          b. npm install express
//      2. Install UUID
//          a. npm install uuid
//      
//==============================================================================//

const express = require("express")                                              // Step 1   Require express
const app = express()                                                           // Step 2   Set express call to a Variable

//=================================|LISTENER|===================================//
//                                                                              //          Set up a port to listen for GET, POST, PUT, DELETE
app.listen(9000, () => {                                                        // Step 3  (1: PORT = 9000  (2: CALLBACK = () => {}
    console.log("The Server is running on Port 9000")                           // Step 4
})                                                                              // Step 3
//==============================================================================//

//=================================|NODEMON|====================================//

// Step 7 Installing Nodemon [IN TERMINAL] npm install -g nodemon               // Step 7   Setting up nodemon will streamline the process of updating the server instantaniously
//                                                                              //          so you don't have to run it manually ever change.
// run [IN TERMINAL] node server.js  (not necessary with nodemon)               // Step ... Runs server, you have to run to see every change
// or
// run [IN TEMRINAL] nodemon server.js                                          // Step ... Runs Server, auto refreshes every change.
//==============================================================================//


//=================================|MIDDLEWARE|=================================//
//                              (for every request)
app.use(express.json()) //                                                      // Step 5 Looks for a request body, and turns it into 'req.body

//======|Middleware Samples (Not Part of Movie Server)|======//
//======|Receive it here w/out a request.body|======//
app.use("/items", (req, res, next) => {     // "/items" is the request
    console.log("The items in middleware was executed")
    next()
})
//======|we add it to the request here|======//

app.use("/items", (req, res, next) => {
    req.body = {name: "Rick"}
    next()
})
//======|sending it here|======//   req is the same on all 3.

app.get("/items", (req, res, next) => {
    console.log("get request received")
    res.send(req.body)
})


//===============================//
//=================================|ROUTES|=====================================//
app.use("/movies", require ("./Routes/movieRouter.js"))                         // Step 6 Create your routes
app.use("/tvShows", require ("./Routes/tvShowRouter.js"))                       // Step 6 Create your routes

//=================================|DIRECTORIES/ MODULES|=======================//
//      1. Create a Directory for your routes (i.e. "routes" or "Routes")       //
//      2. *** Continue Setup Step by step in "movieRouter" directory
//==============================================================================//


       
         



