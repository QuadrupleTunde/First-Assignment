import './App.css';
import React, { useState } from 'react';

function App() {
  let [ counter, changeCounter ] = useState(1);
  window.changeCounter = changeCounter;
  window.counter = counter;
  console.log(counter);
  console.log(changeCounter);
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;

