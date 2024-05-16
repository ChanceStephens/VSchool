import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import moment from 'moment'

import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import moment from 'moment'

export const VschoolTrackerContext = createContext()

export const VschoolTrackerProvider = (props) => {
/*===============================|STATE|====================================*/
const[startDate, setStartDate] = useState('')                                                
const[finishDate, setFinishDate] = useState('')   
const[totalPointsTarget, setTotalPointsTarget] = useState(0)                
const[dailyPointsTarget, setDailyPointsTarget] = useState(0)   
const[dailyPointsCompleted, setDailyPointsCompleted] = useState(0)                                                   
const[totalDailyPointsCompleted, setTotalDailyPointsCompleted] = useState(0) 
const[targetDays, setTargetDays] = useState(0) 
const[pointStatus, setPointStatus] = useState(0)                                                          
const[dailyStatus, setDailyStatus] = useState(0) 
const[dailyCountdown, setDailyCountdown] = useState(0) 
const[targetCountdown, setTargetCountdown] = useState(0) 
const[studentCountdown, setStudentCountDown] = useState(0) 
const[targetTracker, setTargetTracker] = useState(0)
const[studentTracker, setStudentTracker] = useState(0)
const[toggleTargetForm, setToggleTargetForm] = useState(true)                                                 
const[toggleDailyForm, setToggleDailyForm] = useState(true)
/*==========================================================================*/
/*===============================|MOST RECENT USER DATA|====================*/
// const latestUserData = userData.length > 0 ? userData[userData.length - 1] : null
/*==========================================================================*/
/*===============================|FORMATTED DATES|==========================*/
// const formattedStartDate = moment(startDate).format('MMM Do YYYY')
// const formattedFinishDate = moment(finishDate).format('MMM Do YYYY')
// const formattedDatePosted = moment(datePosted).format('MMMM Do YYYY, h:mm:ss a')
/*==========================================================================*/
/*===============================|HANDLE CHANGE|============================*/
function handleChange(event, name) {
    const { value } = event.target
    if (name === 'startDate') {
        setStartDate(value)
    }
    if (name === 'finishDate') {
        setFinishDate(value)
    }
    if (name === 'totalPointsTarget') {
        setTotalPointsTarget(+value)
    }
    if (name === 'dailyPointsCompleted') {
        setDailyPointsCompleted(+value)
    }
}
/*==========================================================================*/
/*===============================|HANDLE INITIAL SUBMIT|====================*/
function handleInitialSubmit(event) {
    event.preventDefault()
    const date1 = moment(startDate)                                             
    const date2 = moment(finishDate)                                                       
    const difference = date2.diff(date1, "days")                                
    setTargetDays(difference)      
        setDailyCountdown(difference)                                             
        const getDailyPointsTarget = totalPointsTarget / difference                 
        const roundDailyPointsTarget = Math.ceil(getDailyPointsTarget * 100) / 100      
        setDailyPointsTarget(roundDailyPointsTarget)                                
        const getTotalPointsTarget = difference * roundDailyPointsTarget            
        setTargetCountdown(getTotalPointsTarget - dailyPointsTarget)
        setStudentCountDown(getTotalPointsTarget - dailyPointsCompleted)
        setToggleTargetForm()                                                       
    }
/*==========================================================================*/
/*===============================|USE EFFECT|===============================*/
useEffect(() => {
    setPointStatus(targetCountdown - studentCountdown);
    setDailyStatus((targetCountdown - studentCountdown) / dailyPointsTarget);
    }, [targetCountdown, studentCountdown, dailyPointsTarget]);
/*==========================================================================*/
/*===============================|HANDLE FIRST DAILY SUBMIT|======================*/
function handleFirstDailySubmit(event) {
    event.preventDefault()
    setDailyCountdown(prevDailyCountDown => prevDailyCountDown - 1)
    setTotalDailyPointsCompleted(prevDailyPointsCompleted => prevDailyPointsCompleted + dailyPointsCompleted)
    setTargetTracker(prevTargetTracker => prevTargetTracker + dailyPointsTarget)
    setStudentTracker(prevStudentTracker => prevStudentTracker + dailyPointsCompleted)
    setTargetCountdown(prevTargetCountdown => prevTargetCountdown - dailyPointsTarget)
    setStudentCountDown(prevStudentCountdown => prevStudentCountdown - dailyPointsCompleted)
    setToggleDailyForm(false) 
}
/*==========================================================================*/
/*===============================|HANDLE TOGGLE TARGET FORM|====================*/
function handleToggleTargetForm() {
    toggleTargetForm === true ? setToggleTargetForm(false) : setToggleTargetForm(true)
}
/*==========================================================================*/
/*===============================|HANDLE TOGGLE DAILY FORM|====================*/
function handleToggleDailyForm() {
    toggleDailyForm === true ? setToggleDailyForm(false) : setToggleDailyForm(true)
} 
/*===============================|CONSOLE LOGS|=============================*/
console.log('startDate', startDate)                                          
console.log('finishDate', finishDate)                                        
console.log('totalPointsTarget', totalPointsTarget)                          
console.log('dailyPointsTarget', dailyPointsTarget)                          
console.log('targetDays', targetDays)                                        
console.log('dailyCountdown', dailyCountdown)                                
console.log('targetCountdown', targetCountdown)                                
console.log('studentCountdown', studentCountdown)                                
console.log("targetTracker", targetTracker)                                        
console.log("studentTracker", studentTracker)                                        
console.log('dailyPointsCompleted', dailyPointsCompleted)                    
console.log("totalDailyPointsCompleted", totalDailyPointsCompleted)          
console.log("pointStatus", pointStatus)                                      
console.log("dailyStatus", dailyStatus)                                      
/*==========================================================================*/
return (
    <VschoolTrackerContext.Provider value={{
        startDate,                  
        finishDate,                 
        totalPointsTarget,           
        dailyPointsTarget,                
        targetDays,
        dailyCountdown,
        targetCountdown,
        studentCountdown,
        targetTracker,
        studentTracker,
        dailyPointsCompleted, 
        totalDailyPointsCompleted,
        pointStatus,
        dailyStatus,
        toggleTargetForm,
        toggleDailyForm,
        handleChange,               
        handleInitialSubmit,        
        handleFirstDailySubmit,
        // handleRemainingDailySubmits,
        handleToggleTargetForm,
        handleToggleDailyForm,
    }}>
    {props.children}
    </VschoolTrackerContext.Provider>
)
}   