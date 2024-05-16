//=================|UPDATES AN ITEM EVERY SUBMISSION|==============//
// import React, { useContext } from 'react';
// import { VschoolTrackerContext } from '../AppContext';
// import PointTrackerItem from './PointTrackerItem';

// export default function PointTrackerList() {

//   const { userData } = useContext(VschoolTrackerContext);
// console.log("DEBUG USER DATA ISSUE", userData)

//   return (
//     <>
//     <div className='pointTrackerList'>
//       <h1>Story Point Tracking</h1>
//         {userData.map(user => (
//             <PointTrackerItem key={user._id} userData={user} />
//           ))}
//     </div>
//     </>
//   );
// };
//====================================================================//
//=================|CREATES A NEW ITEM EVERY SUBMISSION|==============//
import React, { useContext } from 'react';
import { VschoolTrackerContext } from '../AppContext';
import UserDataItem from './UserDataItem';

export default function UserDataList() {

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
    deleteUserData, } = useContext(VschoolTrackerContext);

    const {    
      startDate,
      finishDate,
      totalPointsTarget,
      dailyPointsTarget,
      dailyPointsCompleted,
      totalDailyPointsCompleted,
      targetDays,
      pointStatus,
      dailyStatus} = userData
    console.log(userData)
    
  return (
    <div className='userDataList'>
      <h1>Story Point Tracking</h1>
           <div className='studentGoal'>
         <h1>Start Date: <span>{startDate}</span></h1>
         <h1>Deadline: <span>{finishDate}</span></h1>
         <h1>Point to Complete Goal: <span>{totalPointsTarget}</span></h1>
         <h1>Average daily points to meet deadline: <span>{dailyPointsTarget}</span></h1>
         <h1>Total days to meet deadline: <span>{targetDays}</span></h1>
         <button type="button" onClick={handleToggleTargetForm}>Edit Goals</button>
       </div>
      {/* {userData.map(user => (
        <UserDataItem key={user._id} userData={user} />
      ))} */}
    </div>
  );
};
//====================================================================//


/* <h1>Story Point Tracking</h1>*/
/* Renders UserDataItem only if mostRecentUserData exists */
/* {mostRecentUserData && <PointTrackerItem id={mostRecentUserData._id} userData={mostRecentUserData} />} */
/* </div> */
/* <div className='userDataList'> */
