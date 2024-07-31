import React from "react";
import Friend from "./Components/Friend";
import FriendList from "./Components/FriendList";
import navBar from "./images/catAndDogYellowBG.jpg"
import './App.css';

function App() {
  const friendsWithPets = FriendList.map((friend, index) => (
    <div key={index}>
      <Friend 
        name={friend.name}
        age={friend.age}
        image={friend.image}
        pet={friend.pets}
      />
    </div>
  ));

  return (
    <div className="rootBody">
      <header>Welcome to Friends With Pets</header>
        {friendsWithPets}
    </div>
  )
}

export default App;
