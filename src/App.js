import React, { useState } from 'react';
import './App.css';


function App() {

  let [counter,setCounter] = useState(0)

  const increment=()=>{
    setCounter(counter+1)
    console.log(counter);
  }
  const decrement =()=>{
    setCounter(counter-1)
  }
  const reset=()=>{
    setCounter(0)
  }

  return (
    <div>
        <div className='container'>
            <h1>Counter Component</h1>
            <h2>Counter: {counter}</h2>
            <div className='buttongroup'>
              <button onClick={increment}>Increse </button>
              <button onClick={decrement}>Decrease </button>
              <button onClick={reset}>Reset </button>
            </div>
        </div>
    </div>
  );
}

export default App;
