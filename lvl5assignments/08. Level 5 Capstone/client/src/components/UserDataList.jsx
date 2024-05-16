import React, { useContext } from 'react';
import { VschoolTrackerContext } from '../AppContext';
import UserDataItem from './UserDataItem';

export default function UserDataPost() {
  const { userData, latestUserData, } = useContext(VschoolTrackerContext);

  // Get the most recent user data based on userData being sorted by datePosted

  return (
    <div className='userDataPost'>
      {latestUserData && <UserDataItem id={latestUserData._id} userData={latestUserData} />}
    </div>
  );
};








//=================|CREATES A NEW ITEM EVERY SUBMISSION|==============//
// import React, { useContext } from 'react';
// import { VschoolTrackerContext } from '../AppContext';
// import UserDataItem from './UserDataItem';

// export default function UserDataList() {

//   const { userData } = useContext(VschoolTrackerContext);
    
//   return (
//     <div className='userDataPost'>
//       <h1>Story Point Tracking</h1>
//       {userData.map(user => (
//         <UserDataItem key={user._id} userData={user} />
//       ))}
//     </div>
//   );
// };


