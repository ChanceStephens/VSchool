import React from "react";

export default function Pet({ name, breed, image }) {
  return (
    <div className="pet">
      <img src={image}/>
      <h1 className="pet--name"><span>Name: </span> {name}</h1>
      <h1 className="pet--breed"><span>Breed: </span>{breed}</h1>
    </div>
  );
}
