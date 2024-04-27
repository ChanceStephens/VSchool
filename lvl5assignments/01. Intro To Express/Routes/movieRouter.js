//===========================|STEPS TO SET UP ROUTER MODULE|=========================//
//===================================================================================//  

const express = require('express')                                          // Step 1       Require express
const movieRouter = express.Router()                                        // Step 2       Declare Router variable for Router call
const { v4: uuidv4 } = require('uuid')                                      //              If using uuidv4, this is needed due to the update (different from lesson)


// Fake Data
// FAKE DATA (Not using a Database Yet...)
//===========================|Fake Data|=============================================//
const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
    { title: "lion king", genre: "fantasy", _id: uuidv4() },
    { title: "friday the 13th", genre: "horror", _id: uuidv4() }
    ]
//==================================================================================//

//===========================|GET ALL|==============================================//    
//                                                                          // Step 4       1. Endpoint (mount path) =  "/"
//                                                                          // Step 5       2. Callback Function    =  () => {}
//                                                                          // Step 6       3. Place Parameters     =   req = request, res = response
movieRouter.get("/", (req, res) => {                                        // Step 7       4. Set up get request   ** After moving code to Module, no longer need movies in "/movies"
    res.send(movies)                                                        // Step 8       5. res.send(call Data Object)
})                                                                          // Step 7
//==================================================================================//

//===========================|GET ONE|==============================================|//
movieRouter.get("/:movieId", (req, res) => {                                // Step 9       1. Mount path to ID  **  make sure endpoint matches the variable
    const movieId = req.params.movieId                                      // Step 10      2. Create variable to hold movieId
    const foundMovie = movies.find(movie => movie._id === movieId)          // Step 11      3. Create variable to hold movie selected
    res.send(foundMovie)                                                    // Step 12      4. Gets Single item
})
//==================================================================================//

//=============================|POST|===============================================//
movieRouter.post("/", (req, res) => {                                       // Step 13                       
    const newMovie = req.body                                               // Step 14           1. Set variable to req.body
    newMovie._id = uuidv4                                                   // Step 15           2. Take newMovie and ad an _id
    movies.push(newMovie)                                                   // Step 16           3. Push newMovie to the Movie Object
    res.send(`Successfully added ${newMovie.title} to the database!`)       // Step 17           4. Console.log() Message that Object has been added
})
//==================================================================================//

//===========================|GET BY GENRE|=========================================//

movieRouter.get('/search/genre', (req, res) => {                                    //          Get a Movie by genre
    const genre = req.query.genre                                           // Step 18           1. Create Variable to hold genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)    // Step 19           2. Create variable to hold filtered movies
    res.send(filteredMovies)                                                // Step 20           3. Gets all of a genre
})
//===================================================================================//

//===========================|DELETE ONE|============================================//

movieRouter.delete("/:movieId", (req, res) => {                        // 
    const movieId = req.params.movieId                                 // Step 21       1. Create a variable to hold movie ID
    const movieIndex = movies.findIndex(movie => movie._id === movieId)// Step 22       2. Create a variable to hold found movie
    movies.splice(movieIndex, 1)                                       // Step 23       3. remove movie from index "at the movie index, remove # items"
    res.send("Successfully deleted Movie")                             // Step 24       4. Console.log() Message to the console
})
//===================================================================================// 

//===========================|UPDATE ONE (PUT)|============================================//
movieRouter.put("/:movieId", (req, res) => {                            
    const movieId = req.params.movieId                                  // Step 25      1. Create a variable to hold movie ID
    const movieIndex = movies.findIndex(movie => movie._id === movieId) // Step 26      2. Create a variable to hold found movie
    const updatedMovie = Object.assign(movies[movieIndex], req.body)    // Step 27      3. Create a variable to hold the replaced movie ** movie[index], replace with req.body
    res.send(updatedMovie)
})


//===========================|OPTIONAL SET UP TO CONSOLIDATE CRUD METHOD|===========//           1. Alternative to the Previous Methods
// movieRouter.route("/")
// .get("/", (req, res) => {                                  
//     res.send(movies)   
// })      
// .post("/", (req, res) => {                                              
//     const newMovie = req.body                                               
//     newMovie._id = uuidv4                                                   
//     movies.push(newMovie)                                                   
//     res.send(`Successfully added ${newMovie.title} to the database!`)        
// })     
//===================================================================================//
//===========================|EXPORT FILE|===========================================//

module.exports = movieRouter                                                  //Step 3          1. Make movieRouter file accessable
//===================================================================================//