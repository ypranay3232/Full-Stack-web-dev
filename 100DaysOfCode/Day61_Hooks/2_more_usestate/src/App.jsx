import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(20);

  const btn = () => {
    setNum(num + 1);
    // just to know the value we can print it 
    console.log("current value is : " + num)
    // we can see something that when we increment the num its incremented to 21 in view but when we console log its showing 20. because the console.log ran first before setNum

    // its because setNum runs asynchronously. js runs in two ways 1) sync in order 2) async without order 
  };

  // working with arrays : 
  const [array1, arrayfunc] = useState({ user: 'demo', age: 25 })
  // now when we want to make changes in user and age we have two ways 1)destructuring : in arrays --> [10,20,30] they store in memory as pointer points to 10 and for 20,30 it will have a reference value that points to original stored value in memory for 20,30. so [10,20,30] wont be stored together in js. so when we change 20 or 30 that change will be reflected on every other reference variable    2)using push() but the array must be an array not as obj as we have now

  const arrayex = () => {
    // when ever a btn is clicked we make a copy of array1
    const newarray = {...array1}
    // now we can make changes to the user and age
    newarray.user="demoarray"
    newarray.age=30
    // then we update it in view
    arrayfunc(newarray)
  }

  return (
    <>
      <h1>{num}</h1>
      <h1>{array1.user} {array1.age}</h1>{/*array1, num all are objects so we have to print as array1.object so : array1.user*/}
      <button onClick={()=>{btn(), arrayex()}}>Click me</button>
    </>
  );
};

export default App;