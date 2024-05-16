import React, { useState, useContext } from 'react';
import { VschoolTrackerContext } from '../AppContext';
import moment from 'moment'

export default function UserDataItem() {
    const { 
        userData,
        setUserData,
        newUserData,
        setNewUserData, 
        dailyCountdown,
        setDailyCountdown,
        targetCountdown,
        setTargetCountdown,
        studentCountdown,
        setStudentCountdown,
        targetTracker,
        setTargetTracker,
        studentTracker,
        setStudentTracker,
        toggleTargetForm,
        setToggleTargetForm,
        toggleDailyForm,
        setToggleDailyForm,
        handleChange,               
        handleInitialSubmit,        
        handleFirstDailySubmit,
        handleToggleTargetForm,
        handleToggleDailyForm,
        getAllUserData,
        getOneUserData,
        addUserData,
        updateUserData,
        deleteUserData,
    } = useContext(VschoolTrackerContext);


    

  return (
    <div className="pointTrackerItem">
        <h1>As of {datePosted}, You Completed {pointsCompleted === 1 ? `${pointsCompleted} Story Point` : `${pointsCompleted} Story Points`}!</h1>
        <h1>You have completed a total of {totalPointsCompleted === 1 ? `${totalPointsCompleted} point` : `${pointsCompleted} points`} in {totalDaysCompleted === 1 ? `${totalDaysCompleted} day.` : `${totalDaysCompleted} days`}!</h1>
      {/* <button onClick={handleResetForm}>Edit</button> */}
    </div>
  );
};



/*
    {pointsBehind >= 0 ? (
        <h1>You are {pointsBehind} points behind</h1>
    ) : (
        <h1>You are {pointsBehind * -1} points ahead</h1>
    )}
    {daysBehind >= 0 ? (
        <h1>You are {daysBehind} days behind</h1>
    ) : (
        <h1>You are {Math.abs(daysBehind)} days ahead</h1>
    )}
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// REMOVED FROM JSX SECTION TO CLEAN UP  
      /* <h1>Today's Completed Points:</h1>
      <h1>{pointsCompleted} points</h1> */
      /* <h1>Yesterday's Completed Story Points:</h1>
      <h1>{prevPointStatus} points</h1> */
      /* {pointsBehind >= 0 ? (
        <h1>You are {pointsBehind} points behind</h1>
    ) : (
        <h1>You are {pointsBehind * -1} points ahead</h1>
    )}
    {daysBehind >= 0 ? (
        <h1>You are {daysBehind} days behind</h1>
    ) : (
        <h1>You are {daysBehind * -1} days ahead</h1>
    )} */
      /* <h1>Date Posted: </h1>
      <h1>{datePosted}</h1> */
      /* <button>Delete</button> */


