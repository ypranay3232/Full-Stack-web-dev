import React from 'react';

const App = () => {

  {/* unlike js we cant use documet.query selector and addeventlistener and when user clicks we call the function. so Instead we do as : we use onclick={} property  */ }

  // we can write the function in two ways either with function keyword or we can use arrow funcs both works 

  // function SwitchUser() {
  //   console.log("User Switched")
  // }

  const SwitchUser = () => {
    console.log("User Switched")
  }
  return (
    <div>

      <h1>Hello, User</h1>
      <button onClick={SwitchUser}>Switch users</button>

      {/* we can also create a function in onclick  */}
      <button onClick={() =>{
        console.log("A arrow function inside onlick")
      }}>Click me</button>

    </div>
  );
};

export default App;