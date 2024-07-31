import React from "react";
import Pet from "./Pet";

export default function Friend({ name, age, image, pet }) {
  return (
    <div className="friendWithPets">
            <h1 className="friend--name">{name}</h1>
        <div className="friend">            
            <img src={image}/>
            <h1 className="friend--age"><span>Age:</span> {age}</h1>
            <h1 className="friend--totalPets"><span>Pets Owned:</span> {pet.length}</h1>
        </div>
        <div className="allPets">
            {pet.map((pet, index) => (
                <Pet key={index} {...pet} />
        ))}
        </div>
    </div>
  );
}
