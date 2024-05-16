import React, { useContext, useState } from 'react'
import { VschoolTrackerContext } from '../AppContext'
import moment from 'moment'
import axios from 'axios'

export default function PointTrackerForm() {

const {
  setNewUserData, 
} = useContext(VschoolTrackerContext)

const [dailyPointsSubmitted, setDailyPointsSubmitted] = useState(0)

const handleChange = (event) => {
  const { name, value } = event.target
  const newValue = name === "dailyPointsSubmitted" ? Number(value) : value;
  setDailyPointsSubmitted(newValue)
}

function handleDailySubmit(event) {
  event.preventDefault()
  axios.get('/api/userData')
  .then(res => {
    console.log("GET ALL USER DATA", res.data)
    const dataArray = res.data
    const sortedDataArray = dataArray.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted))
    const recentPost = sortedDataArray[0]
    const recentPostId = recentPost._id
    axios.get(`/api/userData/${recentPostId}`)
    .then(res => {
      console.log("GET MOST RECENT USER DATA", res.data)
      setNewUserData(res.data)
      const newData = {...res.data}
      const { 
          dailyPointsTarget,
          totalDailyPointsCompleted,
          dailyCountdown,
          targetCountdown,
          studentCountdown,
      } = newData
      const newDailyCountdown = dailyCountdown - 1  
      const newTotalDailyPointsCompleted = totalDailyPointsCompleted + dailyPointsSubmitted
      const newTargetCountdown = targetCountdown - dailyPointsTarget
      const newStudentCountdown = studentCountdown - dailyPointsSubmitted
      const newPointStatus = newTargetCountdown - newStudentCountdown
      const newDailyStatus = newPointStatus / dailyPointsTarget
      const isStudentAhead = newTargetCountdown > newStudentCountdown ? true : false
      const updatedUserData = {
        dailyCountdown: newDailyCountdown,
        dailyPointsCompleted: dailyPointsSubmitted,
        totalDailyPointsCompleted: newTotalDailyPointsCompleted,
        targetCountdown: newTargetCountdown,
        studentCountdown:newStudentCountdown,
        pointStatus: newPointStatus,
        dailyStatus: newDailyStatus,
        studentTracker: isStudentAhead,
      }
      axios.put(`/api/userData/${recentPostId}`, updatedUserData)
      .then(res => {
        console.log("PUT UPDATED USER DATA", res.data)
      })
      .catch(err => {
        console.log("PUT UPDATE ERROR", err)
      })
    })
    .catch(err => {
      console.log("GET MOST RECENT ERROR", err)
    })
  })
  .catch(err => {
    console.log("GET ALL ERROR", err)
  })
}
    return (
      <div className="dailySubmitForm">
          <>
            <form className='pointTrackerForm' onSubmit={(event) => {handleDailySubmit(event)}}>
              <div className='pointTrackerInput'>
                <div className="labelWithInput">
                    <label htmlFor='dailyPointsSubmitted'>Enter the number of points completed today!</label>
                    <input 
                      type="number"
                      pattern="[0-9]*"
                      className="inputBox"
                      id="dailyPointsSubmitted"
                      name="dailyPointsSubmitted"
                      value={dailyPointsSubmitted}
                      onChange={handleChange}
                    />
                  <button>Submit Points</button>
                </div>    
              </div>
            </form>
          </>
      </div>
  )
}
