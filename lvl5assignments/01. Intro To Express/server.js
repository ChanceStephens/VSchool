//=================================|SETUP / INSTALL|============================//
//      1. Install Express                                                      // Step  Install Express
//          a. npm init -y    (quick version to say yes to all queries)         
//          b. npm install express                                              // Step  Install UUID
//      2. Install UUID                                                         
//          a. npm install uuid
//      3. Install Nodemon                                                      // Step  Install Nodemon
//          a. npm install -g nodemon   
//      4. Install Morgain                                                      // Step  Install Morgan
//          a. npm install morgain
//      5. Install Vite
//          a. npm init vite@latest client
//          b. cd client
//          c. npm install
//          d. (See Connect Frontend to Backend Below)
//      
//==============================================================================//
//=================================|NODEMON|====================================//
// Step 7 Installing Nodemon [IN TERMINAL] npm install -g nodemon               // Setting up nodemon will streamline the process of updating the server instantaniously
//                                                                              //          so you don't have to run it manually ever change.
// run [IN TERMINAL] node server.js  (not necessary with nodemon)               //  ... Runs server, you have to run to see every change
// or
// run [IN TEMRINAL] nodemon server.js                                          //  ... Runs Server, auto refreshes every change.
//==============================================================================//
//=================================|CONNECT FRONTEND TO BACKEND|================//
//                                                                              //
//                              ****VITE****                                    //
//                                                                              //
//  When connecting your backend to your frontend using VITE, you will need to  //
// add the proxy manually to the vite.config file instead of the package.json   //
// like Create-React-App in the video above.  Use the below vite.config file    //
// as a reference to do this and use /api for all routing.                      //  
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
//=================================|EXPRESS|====================================//
const express = require("express")                                              // Step 1   Require express
const app = express()                                                           // Step 2   Set express call to a Variable
//=================================|LISTENER|===================================// Set up a port to listen for GET, POST, PUT, DELETE
app.listen(9000, () => {                                                        // Step 3  (1: PORT = 9000  (2: CALLBACK = () => {}
    console.log("The Server is running on Port 9000")                           // Step 4
})                                                                              // Step 3
//==============================================================================//
//=================================|MORGAN|=====================================//
const morgan = require('morgan')                                                // require Morgan
app.use(morgan('dev'))                                                          // set morgan to dev mode
//==============================================================================//
//=================================|MIDDLEWARE|=================================//
app.use(express.json()) //                                                      // Step 5 Looks for a request body, and turns it into 'req.body
//==============================================================================//
//=================================|MIDDLEWARE SAMPLES|=========================//
/*
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
//==============================================================================//*/
//=================================|ROUTES|=====================================//
app.use("/api/movies", require ("./routes/movieRouter.js"))                         // Step 6 Create your routes
app.use("/tvShows", require ("./routes/tvShowRouter.js"))                       // Step 6 Create your routes
//=================================|DIRECTORIES/ MODULES|=======================//
//      1. Create a Directory for your routes (i.e. "routes" or "Routes")       //
//      2. *** Continue Setup Step by step in "movieRouter" directory           //
//==============================================================================//


       
         






