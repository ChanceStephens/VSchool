//      2. Install UUID                                                         
//          a. npm install uuid

/*
// const { v4: uuidv4 } = require('uuid')                                      //              If using uuidv4, this is needed due to the update (different from lesson)
//                                                                                      NOT NEEDED ANY LONGER WITH CREATION OF A DATABASE
//===========================|Fake Data|=============================================// NOT NEEDED ANY LONGER WITH CREATION OF A DATABASE
// Fake Data
// FAKE DATA (Not using a Database Yet...)
// const movies = [
//     { title: "die hard", genre: "action", _id: uuidv4() },
//     { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
//     { title: "lion king", genre: "fantasy", _id: uuidv4() },
//     { title: "friday the 13th", genre: "horror", _id: uuidv4() }
//     ]
//==================================================================================//
*/
//GET ALL
    // Movie.find((err, movies) => {
    //     if(err){
    //         res.status(500)
    //         return next(err)
    //         return res.status(200).send(movies)                                                        // Step 8       5. res.send(call Data Object)

//GET ONE
    movieRouter.post("/", async (req, res, next) => {
        try {
            const newMovie = new Movie(req.body);
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (error) {
            next(error);
        }
    });
//DELETE ONE
    movieRouter.delete("/:movieId", async (req, res, next) => {
        try {
            const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);
            if (!deletedMovie) {
                const error = new Error(`Movie with id ${req.params.movieId} not found.`);
                res.status(404);
                return next(error);
            }
            res.status(200).json({ message: "Successfully deleted movie", deletedMovie });
        } catch (error) {
            next(error);
        }
    });