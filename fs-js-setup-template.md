### SETUP / INSTALL ==========================================================
# BACKEND ====================================================================
1. Install Express                                                      
    a. npm init -y    (quick version to say yes to all queries)         
    b. npm install express                                              
2. Install Nodemon                                                      
    a. npm install -g nodemon   
3. Install Morgan                                                      
    a. npm install morgan
4. Install Mongoose
    a. npm install mongoose@6.12.8
    b. verify mongoose version is "6.12.8"
5. Install Dot Env
    a. npm install dotenv
6. Install Json Web Token
    a. npm install jsonwebtoken
7. Install Bcrypt
    a. npm install bcrypt
8. Install Express-jwt
    a. npm install express-jwt

# FRONTEND ===================================================================
1. Install Vite
    a. npm init vite@latest client
    b. cd client
    c. npm install
2. Install Axios
    a. npm install axios
3. Install react-router-dom
    a. npm install  react-router-dom
4. Replace code in vite.config.js with:
        import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

        // https://vitejs.dev/config/
        export default defineConfig({
        plugins: [react()],
        server: {
            proxy: {
            "/api": {
                target: "http://localhost:9000/",
                changeOrigin: true
            }
            }
        }
        })
==============================================================================
# BACKEND FOLDERS / FILES ====================================================
1. PROJECT FOLDER
    a. Create Server File
    - server.js
    b. Create Route Folder
    - routes
    c. Create Route File
    - exampleRouter.js
    - (***  may be more than 1 file  ***)
    d. Create Models Folder
    - models
    e. Create Models File
    - exampleModel.js
    - (***  may be more than 1 file  ***)
# FRONTEND FOLDERS / FILES ===================================================
1. CD CLIENT>SRC
    a. Delete public Folder
    b. Delete assets Folder
    c. Delete index.css
    d. Clear out App.css
    e. Remove default coding in App.jsx
    f. Remove import './index.css' from main.jsx file
    g. Replace href="/vite.svg" in index.html with tab logo of your choosing (optional)
    h. Replace <title>Vite + React</title> in index.html with Tab title of your choosing
    i. Create Components Folder
    - components
    j. Create a Context File
    - exampleContext.jsx
# SERVER.JS SETUP ============================================================
1. const express = require("express")
2. const app = express()
3. const morgan = require('morgan')
4. app.use(morgan('dev')) 
5. app.use(express.json()) 
6. const mongoose = require('mongoose')
7. const connectToDb = async () => {                                               
    try {
        await mongoose.connect("mongodb+srv://chancestephens2022:"/*PASSWORD HERE*/npm "@cluster0.i6anwre.mongodb.net/")   
        console.log("Connected to the MongoDB")
        } catch (error) {
               console.log(error)
        }
    }
    connectToDb()
8. app.use("/api/examples", require ("./routes/exampleRouter")) 
9. app.use((err, req, res, next) => {                                              
    console.log(err)                                                            
    return res.send({errMsg: err.message})                                      
}) 
10. app.listen(9000, () => {                                                   
    console.log("The Server is running on Port 9000")                           // 
})
