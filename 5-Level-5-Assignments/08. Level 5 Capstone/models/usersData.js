const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userDataSchema = new Schema({
    startDate: {
        type: String,
    },
    finishDate: {
        type: String,
    },
    totalPointsTarget: {
        type: Number,
    },
    dailyPointsTarget: {
        type: Number,
    },
    dailyPointsCompleted: {
        type: Number,
    },
    totalDailyPointsCompleted: {
        type: Number,
    },
    targetDays: {
        type: Number,
    },
    pointStatus: {
        type: Number,
    },
    dailyStatus: {
        type: Number,
    },
    dailyCountdown: {
        type: Number,
    },
    targetCountdown: {
        type: Number,
    },
    studentCountdown: {
        type: Number,
    },
    studentTracker: {
        type: Boolean,
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("UserData", userDataSchema)


/**
 * [x] - startDate                   | Start Date entered by User |
 * [x] - finishDate                  | Finish Date entered by User|
 * [x] - totalPointsTarget           | Total Story Points entered by User in order to complete the leve or stage.|
 * [x] - dailyPointsTarget           | Number of points the User is trying to hit daily to stay on pace.|
 * [x] - targetDays                  | Total difference in days from Start to Finish Date |
 * 
 * [x] - dailyPointsCompleted        | Number of points the User completed for the day.
 * [x] - totalDailyPointsCompleted   | An accumulation of points the user has completed
 * [x] - pointStatus                 | Number of Story points the User is either ahead or behind
 * [x] - dailyStatus                 | Number of Days the User is either ahead or behind
 * [x] - dailyCountdown              | TargetDays - 1 on every dailyPointsCompleted submission.
 * [x] - targetCountdown             | "Ghost" Pace of totalPointsTarget - dailyPointsTarget each dailyPointsCompleted submission
 * [x] - studentCountdown            | Student's Pace of totalPointsTarget - dailyPointsCompleted each dailyPointsCompleted submission
 * [x] - studentTracker              | Boolean, True if User is on track / False if User is Behind
 * [x] - datePosted                  | Time Stamp of user's dailyPointsCompleted 
 */