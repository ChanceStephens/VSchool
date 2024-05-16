//=================================|SETUP / INSTALL|============================//
//---------------------------------|BACKEND|------------------------------------//
//      1. Install Express                                                      
//          a. npm init -y    (quick version to say yes to all queries)         
//          b. npm install express                                              
//      2. Install Nodemon                                                      
//          a. npm install -g nodemon   
//      3. Install Morgan                                                      
//          a. npm install morgan
//      4. Install Mongoose
//          a. npm install mongoose
//      5. Confirm package.json has these Dependancies 
//          a. change mongoose version to "6.12.8"
//---------------------------------|FRONTEND|-----------------------------------//
//      1. Install Vite
//          a. npm init vite@latest client
//          b. cd client
//          c. npm install
//          d. (See Connect Frontend to Backend Below)
//      2. Install Axios
//          a. npm install axios
//==============================================================================//
/*=================================|NODEMON|====================================//
// Installing Nodemon [IN TERMINAL] npm install -g nodemon                      // Setting up nodemon will streamline the process of updating the server instantaniously
//                                                                              //  so you don't have to run it manually ever change.
// run [IN TERMINAL] node server.js  (not necessary with nodemon)               //  Runs server, you have to run to see every change
// or
// run [IN TEMRINAL] nodemon server.js                                          //  Runs Server, auto refreshes every change.
//==============================================================================*/
/*=================================|CONNECT FRONTEND TO BACKEND|================//
//                              ****VITE****                                    //
//                                                                              //
//  When connecting your backend to your frontend using VITE, you will need to  //
// add the proxy manually to the vite.config file instead of the package.json   //
// like Create-React-App in the video above.  Use the below vite.config file    //
// as a reference to do this and use /api for all routing.                      //
//                                                                              //
//      ***Copy and Paste this code into "vite.config.js"***                    //
//                                                                              //
//      import { defineConfig } from 'vite'                                     //
//      import react from '@vitejs/plugin-react'                                //
//                                                                              //
//                                                                              //
//      export default defineConfig({                                           //
//        plugins: [react()],                                                   //
//        server: {                                                             //
//          proxy: {                                                            //
//            '/api': {                                                         //
//              target: 'http://localhost:9000',                                //
//              changeOrigin: true,                                             //
//              secure: false,                                                  //
//            },                                                                //
//          },                                                                  //
//        },                                                                    //
//      });                                                                     //
//                                                                              //
//  vite front end -  any request to the backend will begin with “/api”         //
//  (from the vite.config file) see below example                               //
//                                                                              //
//  axios.get("/api/chores")                                                    //
//                                                                              //
//  backend request routing using Vite - any request from the front end will    // 
//  use the “/api” endpoint for routing - see below example                     //
//                                                                              //
//  app.use("/api/chores", require("./routes/choresRouter.js"))                 //
//                                                                              //
//==============================================================================*/
//=================================|EXPRESS|====================================//
const express = require("express")                                              // Step 1   Require express
const app = express()                                                           // Step 2   Set express call to a Variable
//==============================================================================//
//=================================|MORGAN|=====================================//
const morgan = require('morgan')                                                // require Morgan
app.use(morgan('dev'))                                                          // set morgan to dev mode
//==============================================================================//
//=================================|MIDDLEWARE|=================================//
app.use(express.json())                                                         //   
//==============================================================================//
//=================================|MONGOOSE|===================================//
const mongoose = require('mongoose')
//const Movie = require('../models/movie.js')
//==============================================================================//
//=================================|CONNECT DATABASE|===========================//
const connectToDb = async () => {                                               // Looks for a request body, and turns it into 'req.body
    try {
        await mongoose.connect("mongodb+srv://chancestephens2022:"/*PASSWORD HERE*/npm "@cluster0.i6anwre.mongodb.net/")   
        console.log("Connected to the MongoDB")
       } catch (error) {
           console.log(error)
       }
   }
connectToDb() 
//==============================================================================//
//=================================|ROUTES|=====================================//
app.use("/api/movies", require ("./routes/movieRouter"))                        // Create your routes
// app.use("/api/tests", require("./routes/testRouter"))                        //           
// app.use("/tvShows", require ("./routes/tvShowRouter.js"))                    //
//=================================|DIRECTORIES/ MODULES|=======================//
//      1. Create a Directory for your routes (i.e. "routes" or "Routes")       //
//      2. *** Continue Setup in "Router" directory                             //
//==============================================================================//
//=================================|ERROR HANDLING|=============================//
app.use((err, req, res, next) => {                                              // Middleware: Up to 4 parameters: Error, Request, Response, and Next
    console.log(err)                                                            // console.log() whatever the err parameter is,
    return res.send({errMsg: err.message})                                      // return to stop process, {errMsg: err.message} renders the message on Postman
})                                                     
//==============================================================================//
//=================================|LISTENER|===================================// Set up a port to listen for GET, POST, PUT, DELETE
app.listen(9000, () => {                                                        // (1: PORT = 9000  (2: CALLBACK = () => {}
    console.log("The Server is running on Port 9000")                           // 
})                                                                              // 
//==============================================================================//
/*=================================|MIDDLEWARE SAMPLES|=========================//

//---------------------------------|Middleware(Not Part of Movie Server)|-------//
//---------------------------------|Receive it here w/out a request.body|-------//
app.use("/items", (req, res, next) => {                                         // "/items" is the request
    console.log("The items in middleware was executed")
    next()
})
//---------------------------------|we add it to the request here|--------------//
app.use("/items", (req, res, next) => {
    req.body = {name: "Rick"}
    next()
})
//---------------------------------|sending it here|----------------------------//   req is the same on all 3. 
app.get("/items", (req, res, next) => {
    console.log("get request received")
    res.send(req.body)
})
//==============================================================================*/










