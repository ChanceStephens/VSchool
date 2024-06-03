import React, { useContext, useState, useEffect } from 'react'
import { VschoolTrackerContext } from '../AppContext'
import moment from 'moment'
import axios from 'axios'

export default function dailyPointsTargetForm() {
  
  const [toggleTargetForm, setToggleTargetForm] = useState(true)  

  const { newUserData, setNewUserData, setUserData } = useContext(VschoolTrackerContext);
  const { startDate, finishDate, totalPointsTarget, dailyPointsTarget, targetDays } = newUserData
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setNewUserData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  function handleToggleTargetForm() {
  toggleTargetForm === true ? setToggleTargetForm(false) : setToggleTargetForm(true)
}
  function handleInitialSubmit(event) {
    event.preventDefault()
    const date1 = moment(newUserData.startDate)
    const date2 = moment(newUserData.finishDate)
    const difference = date2.diff(date1, "days")
    const toStringDate1 = date1.format('MMM Do YYYY') 
    const toStringDate2 = date2.format('MMM Do YYYY') 
    const getDailyPointsTarget = newUserData.totalPointsTarget / difference
    const roundDailyPointsTarget = Math.ceil(getDailyPointsTarget * 100) / 100
    const getTotalPointsTarget = difference * roundDailyPointsTarget
    const updatedProperties = {
      startDate: toStringDate1,
      finishDate: toStringDate2,
      totalPointsTarget: getTotalPointsTarget,
      dailyPointsTarget: roundDailyPointsTarget,
      targetDays: difference,
      dailyPointsCompleted: 0,
      totalDailyPointsCompleted: 0,
      pointStatus: 0,
      dailyStatus: 0,
      dailyCountdown: difference,
      targetCountdown: getTotalPointsTarget,
      studentCountdown: getTotalPointsTarget,
      studentTracker: true,
    }
    setUserData([updatedProperties])
    setNewUserData(updatedProperties)
    setToggleTargetForm()
    axios.post('/api/userData', updatedProperties)
    .then(res => {
      console.log("POST:INITIAL SUBMIT SUCCESSFUL",res.data)
      })
      .catch(err => {
        console.error("POST: INITIAL SUBMIT ERROR", err)
      })
  }

    return (
      <>
        <div className="dailyTargetForm-container">
          {toggleTargetForm === true ? (
            <>
            <form className="dailyTargetForm" onSubmit={handleInitialSubmit}>
              <div className="labelWithInput">
                <label htmlFor='startDate'>Start Date:</label>
                <input
                  type='date'
                  className="inputBox"
                  id='startDate'
                  name='startDate'
                  value={startDate}
                  onChange={handleChange}
                  />
              </div>
              <div className="labelWithInput">
                <label htmlFor='finishDate'>Finish Date:</label>
                <input
                  type='date'
                  className="inputBox"
                  id='finishDate'
                  name='finishDate'
                  value={finishDate}
                  onChange={handleChange}
                  />
              </div>
              <div className="labelWithInput">
                <label htmlFor='totalPointsTarget'>Story Points Goal: </label>
                <input
                  type="number"
                  className="inputBox"
                  id='totalPointsTarget'
                  name='totalPointsTarget'
                  value={totalPointsTarget}
                  onChange={handleChange}
                  />
              </div>
              <button type="submit">Submit</button>
            </form>
          </>
          ) : (
            <>
            <div className='studentGoal'>
              <h1>Start Date: <span>{startDate}</span></h1>
              <h1>Deadline: <span>{finishDate}</span></h1>
              <h1>Point to Complete Goal: <span>{totalPointsTarget}</span></h1>
              <h1>Average daily points to meet deadline: <span>{dailyPointsTarget}</span></h1>
              <h1>Total days to meet deadline: <span>{targetDays}</span></h1>
              <button type="button" onClick={handleToggleTargetForm}>Edit Goals</button>
            </div>
          </>
          )}
        </div>
      </>
    );
  }
    