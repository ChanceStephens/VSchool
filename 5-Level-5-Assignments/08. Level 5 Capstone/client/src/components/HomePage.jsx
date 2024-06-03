import React from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DailyDose from './DailyDose'
import PointTrackerList from './PointTrackerList'

export default function HomePage() {

    return(
        <div className="homePage">
            <PointTrackerList/>
            <DailyDose/>
        </div>
    )
}