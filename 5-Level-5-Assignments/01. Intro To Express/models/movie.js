//=================================|DATABASE MODEL|=============================//
const mongoose = require('mongoose')                                            // Require Mongoose
const Schema = mongoose.Schema                                                  // Variable for mongoose.Schema (easier and better readability)
//=================================|MOVIE BLUEPRINT|============================//
const movieSchema = new Schema({                                                // Constructor function to create an instance of an object
    title: {                                                                    // Key Value pairs
        type: String,                                                           // Data Type of Property
        required: true                                                          // Required === Manditory data must be entered                 
    },
    genre: {
        type: String,
        enum: ['action', 'fantasy', 'horror'],                                  // forces user to use one of the provided strings
        required: true
    },
    director: {//Not Functional, Edited from lesson to fit this model for reference
        type: Schema.Types.ObjectId,//ID of existing "director"
        ref: "Director",//reference the Director Schema
        required: true//must have
    }
})
module.exports = mongoose.model("Movie", movieSchema)                           // Export the model name "Movie" with the Schema designed above
//==============================================================================//