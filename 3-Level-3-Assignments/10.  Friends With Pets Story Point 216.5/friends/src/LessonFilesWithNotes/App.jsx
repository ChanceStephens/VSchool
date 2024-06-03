import React from "react";
import Friend from "./Components/Friend"; // Importing the Friend component
import FriendList from "./Components/FriendList"; // Importing the FriendList data
import './App.css';

function App() {
  const friendsWithPets = FriendList.map((friend, index) => (
    <div key={index}>
      <Friend 
        name={friend.name} // Passing friend's name to the Friend component
        age={friend.age} // Passing friend's age to the Friend component
        image={friend.image} // Passing friend's image to the Friend component
        pet={friend.pets} // Passing friend's pets to the Friend component
      />
    </div>
  )); // Creating an array of Friend components with their respective data

  return <div>{friendsWithPets}</div>; // Displaying the array of Friend components
}

export default App; // Exporting the App component