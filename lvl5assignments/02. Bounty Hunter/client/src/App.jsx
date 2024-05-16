import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Bounty from './components/Bounty'
import AddBountyForm from './components/AddBountyForm'

function App() {

  const [bounties, setBounties] = useState([])

// GET ALL
  function getBounties() {
    axios.get(`/api/bounties`)
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }

// ADD ONE
function addBounty(newBounty){
  axios.post('/api/bounties', newBounty)
  .then(res => {
    console.log(res.data)
    setBounties(prevBounties => [...prevBounties, res.data])
  })
  .catch(err => console.log(err))
}

// DELETE BOUNTY
function deleteBounty(bountyId){
  axios.delete(`/api/bounties/${bountyId}`)
  .then(res => {
    setBounties(prevBounties => [...prevBounties.filter(bounty => bounty._id !== bountyId)])
  })
  .catch(err => console.log(err))
}

//EDIT BOUNTY
function editBounty(updates, bountyId) {
    axios.put(`/api/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div>
      <div className="bounty-container">
        <AddBountyForm
          submit={addBounty}
          btnText="Add Bounty"
        />
        {bounties.map(bounty => 
          <Bounty
            {...bounty}
            key={bounty._id}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
          />
        )}
      </div>
    </div>
  )
}

export default App
