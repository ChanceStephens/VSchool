import React from 'react';

const Die = (props) => {
  const { die, rollDie } = props; // Destructure props to get die and rollDie

  return (
    <div>
      <h1>Die Component is Working</h1>
      {die.map((number, index) => (
        <div key={index}>
          <h1>{number}</h1>
        </div>
      ))}
    </div>
  );
};

export default Die;




// import React from "react";

// const Die = (props) => {
//     return (
//         <div>
//             <h1>Die Component is Working</h1>
//             {props.die.map((number, index) => (
//                 <div>
//                     <h1 key={index} id={index + 1}>{number}</h1>
//                     <button onClick={rollDie}>Hold!</button>
//                 </div>
//                 ))}
//         </div>
//         )
// }
// export default Die