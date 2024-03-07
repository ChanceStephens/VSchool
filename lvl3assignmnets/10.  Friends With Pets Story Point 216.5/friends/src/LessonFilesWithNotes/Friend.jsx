import React from "react";
import Pet from "./Pet"; // Importing the Pet component

export default function Friend({ name, age, image, pet }) {
  return (
    <div>
      <img src={image} alt={name} /> {/* Displaying friend's image */}
      <h1>{name}</h1> {/* Displaying friend's name */}
      <h1>{age}</h1> {/* Displaying friend's age */}
      <h1>Pets:</h1> {/* Header for pets */}
      {pet.map((pet, index) => (
        <Pet key={index} {...pet} /> // Displaying each pet using the Pet component
      ))}
    </div>
  );
}
