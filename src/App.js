import React, {useState} from 'react';
import './App.css';
import Message from "./Message";
import { Button } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';


function App() {

  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);

  return (
      <div className={`box ${isMorning ? 'dayLight' : 'box'}`}>
          <div className="limiter">
              <div className="container-login100">
                  <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                      <h1 style={{}} className="login100-form-title">
                          UPDATE COUNTER & DAY
					</h1>
                      <br/>


        <h1>GOOD {isMorning ? 'MORNING' : 'NIGHT'}</h1>

        <Message counter = {count}/>
        <br/>

        <Button sm btnStyle="primary" variant="primary" className="btn-primary" onClick={
          () => setCount(++count)
        }>
          Update Counter
        </Button>{' '}

        <Button sm btnStyle="warning" variant="warning" onClick={
          () => setMorning(!isMorning)
        }>
          Update Day
        </Button>
              </div>
          </div>
      </div>
      </div>
  );
}

export default App;
