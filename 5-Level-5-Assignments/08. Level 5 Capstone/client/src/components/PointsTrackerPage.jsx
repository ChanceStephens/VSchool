import React from 'react'
import DailyTargetForm from './DailyTargetForm'
import PointsTrackerForm from './PointTrackerForm'
import UserDataList from './UserDataList'
import PointTrackerList from './PointTrackerList'


export default function PointsTrackerPage() {

    return(
        <div className="pointsTrackerPage">
            <DailyTargetForm/>
            <PointsTrackerForm/>
            <UserDataList/>
            {/* <PointTrackerList/> */}
        </div>
    )
}