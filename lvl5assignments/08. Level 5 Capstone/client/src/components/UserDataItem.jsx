import React, { useContext } from 'react';
import { VschoolTrackerContext } from '../AppContext';

export default function UserDataItem({ userData }) {
    const { handleResetForm } = useContext(VschoolTrackerContext);
    const {
        startDate,
        finishDate,
        totalStoryPoints,
        dailyTarget,
    } = userData


  return (
    <div className="dataItem">
      <h1>Start Date: {startDate}</h1>
      <h1>Finish Date: {finishDate}</h1>
      <h1>Total Story Points: {totalStoryPoints}</h1>
      <h1>Daily Target: {dailyTarget}</h1>
      <button onClick={handleResetForm}>Edit</button>
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



{/* <h1>Today's Completed Points:</h1>
<h1>{completedPoints} points</h1> */
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


