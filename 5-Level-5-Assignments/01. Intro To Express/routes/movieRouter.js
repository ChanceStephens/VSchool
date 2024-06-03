//===========================|STEPS TO SET UP ROUTER MODULE|========================//
const express = require('express')                                                  // Require express
const movieRouter = express.Router()                                                // Declare Router variable for Router call
const Movie = require('../models/movie')                                            // Import "Movie" data model
//==================================================================================//  
//===========================|GET ALL|==============================================//    
//                                                                                  //       
movieRouter.get("/", async (req, res, next) => {                                    //Endpoint (mount path) =  "/", Place Parameters = (req = request, res = response)           
    try {                                                                           //
        const movies = await Movie.find();
        return res.status(200).send(movies)//res.json(movies);
    }  catch (error) {
        next(error)
    }
})

/*
NOT FUNCTIONAL, JUST FOR REFERANCE
GET BY DIRECTOR

movieRouter.get('/:DirectorId',(req, res, next))
    Movie.find({ author: req.params.authorId}, (err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
*/
//==================================================================================//
//===========================|GET ONE|==============================================//
// movieRouter.get("/:movieId", (req, res, next) => {                                  // Mount path to ID  **  make sure endpoint matches the variable
//     const movieId = req.params.movieId                                              // Create variable to hold movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)                  // Create variable to hold movie selected
//     if(!foundMovie) {
//         const error = new Error(`The item with id ${movieId} was not found.`)
//         res.status(500 )
//         return next(error)
//     }
    
//     res.status(200).send(foundMovie)                                                // Gets Single item
// })
//==================================================================================//
//=============================|POST|===============================================//
movieRouter.post("/", async(req, res, next) => {
    try {
        //req.body.director = req.params.directorId// Lesson purposes DB RELATIONSHIPS w/ MONGOOSE
        const newMovie = new Movie(req.body)// Set variable to req.body
        const savedMovie = await newMovie.save()
        return res.status(201).send(savedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
//==================================================================================//
//===========================|GET BY GENRE|=========================================//
movieRouter.get('/search/genre', (req, res) => {                                    // Get a Movie by genre // Gets all of a genre
    Movie.find({ genre: req.query.genre}, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(movies)
    })                         
})
//==================================================================================//
//===========================|DELETE ONE|===========================================//
movieRouter.delete("/:movieId", (req, res, next) => {                                  //                                          // Console.log() Message to the console
    Movie.findOneAndDelete({_id: req.params.movieId }, (err, deletedItem) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})
//==================================================================================// 
//===========================|UPDATE ONE (PUT)|=====================================//
movieRouter.put("/:movieId", (req, res, next) => {                            
    Movie.findOneAndUpdate(
        {_id: req.params.movieId},                                  // Find this one to update
        req.body,                                                                   // updated the object with this data
        {new: true},                                                                // send back the updated version
        (err, updatedMovie) => {                                                    // Did it work/ Did it go wrong
            if(err){                                                                // Handling the result of it working or not working
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})
//==================================================================================//
//===========================|EXPORT FILE|==========================================//
module.exports = movieRouter                                                        // Make movieRouter file accessable
//==================================================================================//
//===========================|OPTIONAL SET UP TO CONSOLIDATE CRUD METHOD|===========// Alternative to the Previous Methods
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