import React, { useEffect, useState } from "react";

// As we learnt previously on Day61 about Hooks, we know that usestate is used to update the state of the UI. 

// UseEffect helps us to perform parallel tasks in functions  : such as dom manipulation, APi call etc. 

const App = () => {
  // use effect does not disturb react rendering process and let it do its work and print this function parallely.  Lets understand it better with useeffect so we can change state and run other things parallely. 

  const [num, setnum] = useState(0)//initially set to 0
  useEffect(function () {
    console.log("hello from useeffect");
    // Here we can pass dependencies (i.e. an array) if we do that it runs only once.    ,[]

    // a simple misunderstanding here is that useeffect is not an even driven action rather it works parallely so here we are seeing the "hello from useeffect " before we clicked the btn
  }, [])

  // and here inside the dependencies we can pass num ex : [num] if we do this the num executes only once 
  return <>
    {/* now each time we click the button, the state gets updated and parallely we get hello from useeffect  */}

    <h1>{num}</h1>

    <button onClick={() => {
      // setnum(10)//if we do as num + 1. so the useeffect gets called each time our state changes this is called "mounting".
      setnum(num + 1)
    }}>Click me</button>

  </>
}
export default App