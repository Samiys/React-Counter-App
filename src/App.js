import React, {useState} from 'react';
import './App.css';
import Message from "./Message";

function App() {

  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
      <div className={`box ${isMorning ? 'dayLight' : 'box'}`}>

        <h1>GOOD {isMorning ? 'MORNING' : 'NIGHT'}</h1>

        <Message counter = {count}/>

        <button onClick={
          () => setCount(++count)
        }>
          Update Counter
        </button>

        <button onClick={
          () => setMorning(!isMorning)
        }>
          Update Day
        </button>
      </div>
  );
}

export default App;
