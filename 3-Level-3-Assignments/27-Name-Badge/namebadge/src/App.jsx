import React from 'react'
import Form from './Components/Form'
import BadgeList from './Components/BadgeList'
import './App.css'

function App() {
  const [badges, setBadges] = React.useState([])

function handleAddBadge(newBadge) {
  setBadges([...badges, newBadge])
}


  return (
    <div>
      <Form onSubmit={handleAddBadge}/>
      <BadgeList badges={badges}/>
    </div>  
  )
}

export default App
