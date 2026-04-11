import React, { useState } from 'react';

const App = () => {

  // form default behavior is when we submit it it reloads the page ex: create a function and verify it. Now when we click on submit we can see the message but for only a second because the page gets reloaded --> so we have to prevent this. Just pass a parameter/object in function and use preventDefault.
  // const Handleform1 = () => {
  //   console.log("Form submitted")
  // }

  // const Handleform2 = (e) => {
  //   e.preventDefault()
  //   console.log("Form submitted ! ")
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Username:", uname);
  };


  // Now lets understand what is two way Data Binding inr act : It's a mechanism where changes in User UI automatically updates state of components 

  // so to work with states we use usestate : A uname with empty state initially to store input values
  const [uname, setfirst] = useState("")


  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* here in input pass the uname to value  and update the state changes for what user writes */}
        <input type="text" placeholder='Enter your name' value={uname} onChange={(e) => {
          setfirst(e.target.value)
        }} />
        <button>Submit</button>
      </form>


    </>

  );
};

export default App;