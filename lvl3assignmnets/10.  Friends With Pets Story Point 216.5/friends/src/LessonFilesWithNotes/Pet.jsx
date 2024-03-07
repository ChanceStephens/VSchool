import React from "react";

export default function Pet({ name, breed, image }) {
  return (
    <div>
      <img src={image} alt={name} /> {/* Displaying pet's image */}
      <h1>{name}</h1> {/* Displaying pet's name */}
      <h1>{breed}</h1> {/* Displaying pet's breed */}
    </div>
  );
}
