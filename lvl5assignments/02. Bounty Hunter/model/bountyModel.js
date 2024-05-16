const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
        firstName:{
            type: String,
            required: true,

        } ,
        lastName:{
            type: String,
            required: false, //false by default

        },
        living:{
            type: Boolean,
            enum: [true, false],
            required: true,

        },
        bountyAmount:{
            type: Number,
            required: true,

        },
        type:{
            type: String,
            enum: ["sith", "jedi", "Jedi", "Sith"],
            required: true,

        }
        // datePosted:{
        //     type: Date,
        //     default: Date.now
        // }
})
module.exports = mongoose.model("Bounty", bountySchema)// Bounty kdkdkdfkd