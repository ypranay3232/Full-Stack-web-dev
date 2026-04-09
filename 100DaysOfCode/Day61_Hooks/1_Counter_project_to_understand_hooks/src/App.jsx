import React, { useState } from 'react';
import './App.css'; // Make sure your CSS file is imported

const App = () => {
  let [num, setcount] = useState(0);

  // select the write part and change use it in function via that we change the num in braces.
  function counterinc() {
    setcount(num + 1);
  }
  function counterdec() {
    setcount(num - 1);
  }
  function counterreset() {
    setcount(0); 
  }

  return (
    <div className="container">
      <h1>{num}</h1>
      <div className="button-group">
        <button className="btn inc" onClick={counterinc}>Increase</button>
        <button className="btn reset" onClick={counterreset}>Reset</button>
        <button className="btn dec" onClick={counterdec}>Decrease</button>
      </div>
    </div>
  );
};

export default App;