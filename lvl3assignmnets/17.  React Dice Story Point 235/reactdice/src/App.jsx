import React from 'react';
import Die from './Components/Die';
import './App.css';

function App() {
  const [dice, setDice] = React.useState([null, null, null, null, null]); // Default State for dice
  const [heldDice, setHeldDice] = React.useState([false, false, false, false, false]);

  const rollDie = () => {
    const newDice = dice.map((dieRolled, index) => {
      if (!heldDice[index]) {
        return Math.floor(Math.random() * 6) + 1;
      }
      return dieRolled;
    });
    setDice(newDice);
  };

  const rollAllDice = () => {
    const diceRolled = dice.map(() => Math.floor(Math.random() * 6) + 1);
    setDice(diceRolled);
  };

  const toggleHold = (index) => {
    const newHeldDice = [...heldDice];
    newHeldDice[index] = !heldDice[index];
    setHeldDice(newHeldDice);
  };

  return (
    <>
      <div>
        {dice.map((die, index) => (
          <div key={index}>
            <span>{die}</span>
            <button onClick={() => toggleHold(index)}>{heldDice[index] ? 'Unhold' : 'Hold'}</button>
          </div>
        ))}
      </div>
      <button onClick={rollDie}>Roll</button>
      <button onClick={rollAllDice}>Roll All</button>
      <Die die={dice} rollDie={rollDie} /> {/* Passing rollDie function as prop */}
    </>
  );
}

export default App;





// import React from 'react'
// // import DiceBox from './Components/DiceBox'
// import Die from './Components/Die'
// import './App.css'

// function App() {
//   const [dice, setDice] = React.useState([null, null, null, null, null])                   //Default State for dice
//   const [heldDice, setHeldDice] = React.useState([false, false, false, false, false])
//   // const [count, setCount] = React.useState(0)
  
//   const rollDie = () => {
//     const newDice = dice.map((dieRolled, index) => {
//       if (!newDice[index]) {
//         return Math.floor(Math.random() * 6) + 1
//       }
//       return dieRolled
//   })
//   setDice(newDice)
//   }

//   const rollAllDice = () => {                                            // funtion to simumulate rolling of dice
//     const diceRolled = dice.map(() => Math.floor(Math.random() * 6)+ 1)  // maps over dice and produces a random number of 1 to 6 which is now the "New Value"
//     setDice(diceRolled)                                                  // setter function takes New Value and updates the dice value 
//   }

//   const toggleHold = (index) => {
//     const newHeldDice = [...heldDice]
//     newHeldDice[index] = !heldDice[index]
//     setHeldDice(newHeldDice)
//   }

//   return (
//     <>
//       {/* <h1>App Component is working</h1> */}
//       {/* <DiceBox/> */}
//       {/* <Die die={dice}/> */}
//       {/* <button onClick={rollAllDice}>Roll Dice</button> */}
//       <div>
//       <div>
//         {dice.map((die, index) => (
//           <div key={index}>
//             <span>{die}</span>
//             <button onClick={() => toggleHold(index)}>{heldDice[index] ? 'Unhold' : 'Hold'}</button>
//           </div>
//         ))}
//       </div>
//       <button onClick={rollDie}>Roll</button>
//       <button onClick={rollAllDice}>Roll All</button>
//     </div>
//     </>
//   )
// }

// export default App


/*

    { value: 1, held: false },
    { value: 2, held: false },
    { value: 3, held: false },
    { value: 4, held: false },
    { value: 5, held: false }


  const toggleHold = (index) => {
     
    setDice(prevDice => {
      const updatedDice = [...prevDice]
      updatedDice[index] = { ...updatedDice[index], held: !updatedDice[index].held };
      return updatedDice
    })
*/