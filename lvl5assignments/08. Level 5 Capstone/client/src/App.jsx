import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Settings from './components/Settings'
import PointTrackerPage from './components/PointsTrackerPage'
import HomePage from './components/HomePage';
import About from './components/About'


export default function App() {

return (
  <Router>
    <NavBar/>
    <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route  path="/pointstrackerpage" element={<PointTrackerPage/>}/>
      <Route  path="/about" element={<About/>} />
      <Route  path="/settings" element={<Settings/>} />
    </Routes>
  </Router>
)
}
        