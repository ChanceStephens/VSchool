import React, { useState, createContext } from 'react'
export const VschoolTrackerContext = createContext()

export const VschoolTrackerProvider = ({ children }) => {
/*===============================|STATE|====================================*/
const [userData, setUserData] = useState([]) 
const [newUserData, setNewUserData] = useState({
    startDate: '',
    finishDate: '',
    totalPointsTarget: 0,
    dailyPointsTarget: 0,
    dailyPointsCompleted: 0,
    totalDailyPointsCompleted: 0,
    targetDays: 0,
    pointStatus: 0,
    dailyStatus: 0,
    dailyCountdown: 0,
    targetCountdown: 0,
    studentCountdown:0,
    studentTracker: true,
})
/*===============================|NEW USER DATA DESTRUCTURED|===============*/
// const {
//     startDate,
//     finishDate,
//     totalPointsTarget,
//     dailyPointsTarget,
//     dailyPointsCompleted,
//     totalDailyPointsCompleted,
//     targetDays,
//     pointStatus,
//     dailyStatus,
//     dailyCountdown,
//     targetCountdown,
//     studentCountdown,
//     studentTracker
// } = newUserData
/*==========================================================================*/
/*===============================|CONSOLE LOGS|=============================*/
// console.log("userData",userData)
// console.log("newUserData",newUserData)
// console.log('startDate', startDate)                                          
// console.log('finishDate', finishDate)                                        
// console.log('totalPointsTarget', totalPointsTarget)                          
// console.log('dailyPointsTarget', dailyPointsTarget)                          
// console.log('targetDays', targetDays)                                        
// console.log('dailyCountdown', dailyCountdown)                                
// console.log('targetCountdown', targetCountdown)                                
// console.log('studentCountdown', studentCountdown)                                
// // console.log("targetTracker", targetTracker)                                        
// console.log("studentTracker", studentTracker)                                        
// console.log('dailyPointsCompleted', dailyPointsCompleted)                    
// console.log("totalDailyPointsCompleted", totalDailyPointsCompleted)          
// console.log("pointStatus", pointStatus)                                      
// console.log("pointStatus", typeof pointStatus)                                      
// console.log("dailyStatus", dailyStatus)                                      
/*==========================================================================*/
    return (
        <VschoolTrackerContext.Provider value={{
            userData,
            setUserData,    //setUserData is used for updating the main user data array or object.
            newUserData,
            setNewUserData, //setNewUserData is used for managing form state or temporary data changes.
            }}>
            {children}
        </VschoolTrackerContext.Provider>
    )
}

