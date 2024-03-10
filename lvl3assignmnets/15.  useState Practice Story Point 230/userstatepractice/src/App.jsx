import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("pink");

  function updatedColor() {
    setColor(prevColor => (prevColor === "pink" ? "blue" : "pink"))
  }

  return (
    <>
      <div style={{ backgroundColor: color, width: '800px', height: '800px' }}></div>
      <button onClick={updatedColor}style={{ width: '500px', height: "200px"}} >Change Color</button>
    </>
  );
}

export default App;
