import React from 'react';

const App = () => {

  // form default behavior is when we submit it it reloads the page ex: create a function and verify it. Now when we click on submit we can see the message but for only a second because the page gets reloaded --> so we have to prevent this. Just pass a parameter/object in function and use preventDefault.
  const Handleform1 = () => {
    console.log("Form submitted")
  }

  const Handleform2 = (e) => {
    e.preventDefault()
    console.log("Form submitted ! ")
  }

  return (
    <>
      {/* first we create a form with inputs and a button  */}
      <form onSubmit={(e) => {
        Handleform1(), Handleform2(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>

    </>

  );
};

export default App;