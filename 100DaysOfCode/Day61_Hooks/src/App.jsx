import React, { useState } from 'react';


// Hooks in react are nothing more than functions that allows us to pass data and mess around react state and lifecycle.  In simple terms functions which start with (use) in react are called as hooks. 

// lets do an exercise : create a variable with a value then change it 

let a = 10
// now we update the value 
function valueupdate() {
  a = 20
  // but this is not displaying the changes so lets try console log
  console.log(a)//this is showing in devtools but its state is not changing and the "View" is not updating ? It is because direct changes are prohibited in react you have to tell react to do changes. So now we use Usestate Hook 
}

// so we use usestate : just type usestatesnippet : you can see something like this : const [first, setfirst] = usestate(second) and also import it in react 

// means we have two values 1) from which we read values 2) to which we write values = usestate(value of variable)


const App = () => {
  // remember hooks can only be called inside the body of component.
  const [num, setfirst] = useState(20)//or we can use strings too

  const [num1, setnum] = useState("hello world")
  // The second one setfirst and setnum are the write and set the values.

  function increment() {
    setnum(num+1)
    console.log("updated")
  }
  return (
    <>
      {/* <h1>The value of a is {a} </h1> */}
      <h1>The value of a is {num} </h1>
      <h1>The value of a is {num1} </h1>
      {/* To pass multiple function calls we have to use a arrow function  */}
      <button onClick={() => { valueupdate(), increment() } }>Click me</button>

    </>
  );
};

export default App;