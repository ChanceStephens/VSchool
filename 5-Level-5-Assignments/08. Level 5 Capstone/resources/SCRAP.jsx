import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import moment from 'moment'

export const VschoolTrackerContext = createContext()

export const VschoolTrackerProvider = (props) => {
    
/*===============================|STATE|====================================*/
const [isFormSubmitted, setIsFormSubmitted] = useState(false)
const [userData, setUserData] = useState([]) 
const [newUserData, setNewUserData] = useState({
    startDate: '2024-05-09',
    finishDate: '2024-05-29',
    totalStoryPoints: 100,
    dailyTarget: 0,
    pointsCompleted: 0,
    totalPointsCompleted: 0,
    totalDaysCompleted: 0,
    pointStatus: 0,
    dailyStatus: 0,
    _id: "663ce7a89c6e50a2272434e1"
})
const { 
    userName,
    startDate, 
    finishDate, 
    totalStoryPoints, 
    dailyTarget, 
    pointsCompleted, 
    totalPointsCompleted,
    totalDaysCompleted,
    pointStatus,
    dailyStatus,
    datePosted, 
    } = newUserData
/*==========================================================================*/
/*===============================|MOST RECENT USER DATA|====================*/
const latestUserData = userData.length > 0 ? userData[userData.length - 1] : null
/*==========================================================================*/
/*===============================|FORMATTED DATES|==========================*/
// const formattedStartDate = moment(startDate).format('MMM Do YYYY')
// const formattedFinishDate = moment(finishDate).format('MMM Do YYYY')
// const formattedDatePosted = moment(datePosted).format('MMMM Do YYYY, h:mm:ss a')
/*==========================================================================*/
/*===============================|HANDLE CHANGE|============================*/
function handleChange(event, name) {
    const { value } = event.target
    setNewUserData(prevUserData => ({
        ...prevUserData,
        [name]: value
    }))
}
/*==========================================================================*/
/*===============================|HANDLE INITIAL SUBMIT|====================*/
function handleInitialSubmit(event) {
    event.preventDefault()
    calculateDailyStoryPoints()
    axios.get('/api/userData')
    .then(res => {
        const result = res.data
        console.log(result)
        setUserData(result)
        setIsFormSubmitted(true)
    })
    .catch(err => {
        console.log(err)
    })
    axios.post('/api/userData')
    .then(res => {
        setUserData(prevUserData => [...prevUserData, res.data])
    })
    .catch(err => console.log(err))
}
/*==========================================================================*/
/*===============================|HANDLE DAILY SUBMIT|======================*/
function handleDailySubmit(event) {
    event.preventDefault()
    handleUpdateData()
    // updateUserData()
    // getProgressStatus()
   
}
// function handleDailySubmit(event) {
//     event.preventDefault()
//     axios.get('/api/userData')
//     .then(res => {
//         const result = res.data
//         console.log("result", result)
//         const mostRecentData = result.length > 0 ? result[result.length - 1] : null
//         console.log("Most Recent in Daily", mostRecentData)
//         const { dailyTarget, pointsCompleted, totalPointsCompleted, totalDaysCompleted } = mostRecentData
//         const newTotalPointsCompleted = pointsCompleted + totalPointsCompleted
//         const findPointStatus = pointsCompleted - (dailyTarget * totalDaysCompleted)
//         const findDailyStatus = findPointStatus/dailyTarget
//         setPointStatus(findPointStatus)
//         setDailyStatus(findDailyStatus)
//         setUserData(prevUserData => ({
//             ...prevUserData,
//             pointsCompleted: pointsCompleted,
//             totalPointsCompleted: newTotalPointsCompleted,
//             totalDaysCompleted: totalDaysCompleted,
//         }))

//     })
//     .catch(err => {
//         console.log(err)
//     })
    // const newTotalPointsCompleted = totalPointsCompleted + pointsCompleted
    // const newDaysCompleted = totalDaysCompleted + 1 // Assuming a point submission means one more day completed
    // setNewUserData(prevUserData => ({
    //     ...prevUserData,
    //     pointsCompleted: pointsCompleted,
    //     totalPointsCompleted: newTotalPointsCompleted,
    //     totalDaysCompleted: newDaysCompleted,
    // }))
    // axios.put(`/api/UserData/${latestUserData._id}`, {
    //     pointsCompleted: pointsCompleted,
    //     totalPointsCompleted: newTotalPointsCompleted,
    //     totalDaysCompleted: newDaysCompleted,
    // })
    // .then(res => {
    //     axios.get('/api/userData')
    //         .then(res => {
    //             setUserData(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // })
    // .catch(err => {
    //     console.log(err)
    // })
// }
/*+++++++++++++++++++++++++++++++|SUGGESTED CHANGES|++++++++++++++++++++++++*/
// function handleDailySubmit(event) {
//     event.preventDefault()
//     axios.get('/api/userData')
//         .then(res => {
//             const result = res.data
//             const mostRecentData = result.length > 0 ? result[result.length - 1] : null
//             if (mostRecentData) {
//                 // const { dailyTarget, pointsCompleted, totalPointsCompleted, totalDaysCompleted } = mostRecentData
//                 const newTotalPointsCompleted = pointsCompleted + totalPointsCompleted
//                 // const daysTimesTarget = dailyTarget * totalDaysCompleted
//                 // const pointStanding = newTotalPointsCompleted - daysTimesTarget
//                 // const getDailyStatus = pointStanding/dailyTarget
//                 // setPointStatus(pointStanding)
//                 // setDailyStatus(getDailyStatus)
//                 const updatedData = {
//                     ...mostRecentData,
//                     pointsCompleted: pointsCompleted,
//                     totalPointsCompleted: newTotalPointsCompleted,
//                     totalDaysCompleted: totalDaysCompleted,
//                 }
//                 axios.put(`/api/UserData/${mostRecentData._id}`, updatedData)
//                     .then(res => {
//                         setUserData(res.data)
//                     })
//                     .catch(err => {
//                         console.log(err)
//                     })
//             } else {
//                 console.log("No user data available.")
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
/*==========================================================================*/
/*===============================|HANDLE FORM DISPLAY|======================*/
// function handleFormDisplay() {

// }
/*==========================================================================*/
/*===============================|HANDLE RESET|=============================*/
// function handleResetForm() {
//     setIsFormSubmitted(false)
// }
/*==========================================================================*/
/*===============================|USE EFFECT|===============================*/
useEffect(() => {
    if (dailyTarget !== 0) {
        addUserData() // Add user data when daily target is updated
    }
}, [newUserData])
/*==========================================================================*/
/*===============================||=============*/

/*==========================================================================*/
/*===============================|CALCULATE DAILY TARGET|===================*/
function calculateDailyStoryPoints() {
    const date1 = moment(startDate)
    const date2 = moment(finishDate)
    const negDifference = date1.diff(date2,"days")
    const posDifference = negDifference * -1
    const divideTargetByDays = totalStoryPoints/posDifference
    const roundedDailyTarget = Math.ceil(divideTargetByDays * 100) / 100
    setNewUserData(prevUserData => ({
        ...prevUserData,
        dailyTarget: roundedDailyTarget
    }))
}
/*==========================================================================*/

/*==========================================================================*/
/*===============================|GET ALL|==================================*/
// function getAllUserData() {
    //     axios.get('/api/userData')
    //     .then(res => console.log(res.data))
    //         setUserData(res.data)
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }   
/*==========================================================================*/    
/*===============================|GET ONE|==================================*/

/*==========================================================================*/
/*===============================|ADD ONE|==================================*/
function addUserData() {
    axios.post('/api/userData', newUserData)
    .then(res => {
        setUserData(prevUserData => [...prevUserData, res.data])
    })
    .catch(err => console.log(err))
}
/*==========================================================================*/
/*===============================|PUT REQUEST USE EFFECT|===========================*/
// useEffect(() => {
//     if (latestUserData && latestUserData._id) {
//         axios.put(`/api/userData/${latestUserData._id}`, latestUserData)
//             .then(res => {
//                 console.log(`Latest user data with ID ${latestUserData._id} updated successfully.`)
//             })
//             .catch(err => {
//                 console.error(`Error updating latest user data with ID ${latestUserData._id}:`, err)
//             })
//     }
// }, [latestUserData])
/*==========================================================================*/
/*===============================|PUT REQUEST|===============================*/
function handleUpdateData() {
    const updateData = {
        startDate: startDate,
        finishDate: finishDate,
        totalStoryPoints: totalStoryPoints,
        dailyTarget: dailyTarget,
        pointsCompleted: pointsCompleted,
        totalPointsCompleted: totalPointsCompleted,
        totalDaysCompleted: totalDaysCompleted,
        pointStatus: pointStatus,
        dailyStatus: dailyStatus,
        datePosted: datePosted,
    }

    axios.put(`/api/userData/663ce7a89c6e50a2272434e1`, updateData)
        .then(res => {
            console.log("Update successful:", res.data)
            const { pointsCompleted, totalPointsCompleted, dailyTarget, totalDaysCompleted } = res.data
            const addPoints = totalPointsCompleted + pointsCompleted
            const daysTimesTarget = (totalDaysCompleted + 1) * dailyTarget
            const getPointStatus = addPoints - daysTimesTarget
            const getDailyStatus = getPointStatus / dailyTarget

            // Update calculated values to the database
            const calculatedData = {
                pointsCompleted: pointsCompleted,
                totalPointsCompleted: totalPointsCompleted,
                dailyTarget: dailyTarget,
                totalDaysCompleted: totalDaysCompleted,
                pointStatus: getPointStatus,
                dailyStatus: getDailyStatus,
            }

            axios.put(`/api/userData/663ce7a89c6e50a2272434e1`, calculatedData)
                .then(res => {
                    console.log("Calculated values updated successfully:", res.data)
                })
                .catch(err => {
                    console.error("Error updating calculated values:", err)
                })
        })
        .catch(err => {
            console.error("Error updating data:", err)
            // Handle error, e.g., show an error message to the user
        })
}

/*==========================================================================*/
/*===============================|DELETE ONE|===============================*/

/*==========================================================================*/

/*===============================|GET STORYPOINT STATUS|====================*/
function getProgressStatus() {
    axios.get('/api/userData')
    .then(res => {
        const { pointsCompleted, totalPointsCompleted, dailyTarget, totalDaysCompleted } = res.data
        const addPoints = totalPointsCompleted + pointsCompleted
        const daysTimesTarget = (totalDaysCompleted + 1) * dailyTarget
        const getPointStatus = addPoints - daysTimesTarget
        const getDailyStatus = getPointStatus/dailyTarget
    })
}
/*==========================================================================*/
/*===============================||=========================================*/

/*==========================================================================*/
/*===============================||=========================================*/

/*==========================================================================*/
/*===============================|CONSOLE LOGS|=============================*/



/*==========================================================================*/

/*===============================|REMOVED CODE|=============================*/
//*******************************|FORMULA IN SUBMIT TO GET DAILY TARGET|****//
// const result = res.data
// const getDailyTarget = result[0].dailyTarget
// const sumPoints = getDailyTarget + Number(prevPointStatus)
// const findPointsBehind = sumPoints - pointsCompleted
// const findDaysBehind = findPointsBehind/getDailyTarget
// setPointsBehind(findPointsBehind)
// setDaysBehind(findDaysBehind)
//__________________________________________________________________________//
//*******************************|FUNCTION TO FIND POINTS/DAY BEHIND|*******//
// function howFarBehind() {
//     const sumPoints = dailyTarget + prevPointStatus
//     const findPointsBehind = sumPoints - pointsCompleted
//     const findDaysBehind = findPointsBehind/dailyTarget
//     setPointsBehind(findPointsBehind)
//     setDaysBehind(findDaysBehind)
// }
//__________________________________________________________________________//
//*******************************|FIRST HANDLE RESET|***********************//
// function handleResetForm() { <------------------ PREVIOUS RESET CODE
//     setUserData({
//         startDate: '',
//         finishDate: '',
//         totalStoryPoints: 100,
//         dailyTarget: 0,
//         pointsCompleted: 0,
//         prevPointStatus: 0,
//         totalPointsCompleted: 0
//     })
// }
//__________________________________________________________________________//
//*******************************|DELETE ONE|*******************************//
// function deleteUserData(userDataId){
//     axios.delete(`/api/UserData/${userDataId}`)
//     .then(res => {
//         setUserData(prevUserData => [...prevUserData.filter(userData => userData._id !== userDataId)])
//     })
//     .catch(err => console.log(err))
// }
//__________________________________________________________________________//
//*******************************|UPDATE ONE|*******************************//

//+++++++++++++++++++++++++++++++|OR THIS|+++++++++++++++++++++++++++++++++//
// function updateUserData(userDataId) {
//     getAllUserData()
//     const updates = newUserData
//     axios.put(`/api/UserData/${userDataId}`, updates)
//     .then(res => {
//         setUserData(prevUserData => prevUserData.map(userData => userData._id === userDataId ? userData : res.data))
//     })
//     .catch(err => console.log(err))
// }
//__________________________________________________________________________//
//*******************************|GET ONE|**********************************//
// function getDailyTargetFromDB(userDataId) {
//     axios.get(`/api/userData/${userDataId}`)
//     .then(res => {
//         const { dailyTarget } = res.data
//         return dailyTarget
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }
//__________________________________________________________________________//
//*******************************|POINTS TO GO FUNCTION|********************//
// function totalPointsToGo() {
//      const pointsToGo = totalStoryPoints - pointsCompleted
// }
//__________________________________________________________________________//
//*******************************|PREV HANDLE CHANGE|***********************//
// function handleChange(event, name) {
//     const { value } = event.target
//     console.log(`Updating ${name} to:`, value)
//     let newUserDataUpdate = { ...newUserData, [name]: value }
//     const date1 = moment(startDate)
//     const date2 = moment(finishDate)
//     const negDifference = date1.diff(date2, "days")
//     const posDifference = negDifference * -1
//     const divideTargetByDays = totalStoryPoints / posDifference
//     const roundedDailyTarget = Math.ceil(divideTargetByDays * 100) / 100
//     newUserDataUpdate = { ...newUserDataUpdate, dailyTarget: roundedDailyTarget }
//     setNewUserData(prevUserData => ({
//         ...prevUserData,
//         [name]: value
//     }))
// }
//__________________________________________________________________________//
//*******************************|ORIGINAL USEEFFECT|***********************//
// useEffect(() => {
//     if (dailyTarget !== 0) {
//         addUserData() // Add user data when daily target is updated
//     }
// }, [newUserData])
//__________________________________________________________________________//
//*******************************| const latestUserId = latestUserData._id
//     console.log("Latest ID", latestUserId)
//     const updates = {
//         startDate: latestUserData.startDate,
//         finishDate: latestUserData.finishDate,
//         totalStoryPoints: latestUserData.totalStoryPoints,
//         dailyTarget: latestUserData.dailyTarget,
//         pointsCompleted: latestUserData.pointsCompleted,
//         totalPointsCompleted: latestUserData.totalPointsCompleted,
//         daysCompleted: latestUserData.daysCompleted,
//         pointStatus: latestUserData.pointStatus,
//         dailyStatus: latestUserData.dailyStatus,
//         datePosted: latestUserData.datePosted,
// }|*****************************************//

//__________________________________________________________________________//
//*******************************|HANDLE CHANGE|*****************************************//
// function handleChange(event, name) {
//     const { value } = event.target
//     console.log(`Updating ${name} to:`, value)
//     setNewUserData(prevUserData => ({
//         ...prevUserData,
//         [name]: value
//     }))
// }
//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
//*******************************||*****************************************//

//__________________________________________________________________________//
