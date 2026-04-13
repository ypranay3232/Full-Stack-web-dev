import React from "react";

// Local storage == browser memory. When we need to store a user detail where its size is so small such as (saving logging session, preferences etc) we use local storage. The difference here is that local storage stores data permanently (such as loggedin account for browsers etc)

// Session storage : This is a temp storage it stores info until the browser tab is open. when we close the browser its cleared.

// if we have some data stored in local storage we can clear it as : sessionstorage or localstorage .clear(). And we store data in key value pairs. 

// Local and session storage contains few methods() : setitem, getitem, removeitem, clear()

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()

  // saving some info here in localstorage 
  localStorage.setItem("demo", "user")//this will be saved even after closing browser tabs

  // const info = localStorage.getItem("hello")//returns NULL because "hello" does not exists
  const info = localStorage.getItem("demo")
  console.log(info)

  //Remove item to remove items from local storage
  localStorage.removeItem("demo") 


  // we cant store data in object form in localstorage because it wont accept it only accepts in string format so we use : json.stringify() to convert the obj into string

  // user info obj
  const user_info = {
    name:"user1",
    age:20,
    sal:100000
  }

  localStorage.setItem("title",user_info)//you can see this as : [object object]

  // so we use json.stringify
  localStorage.setItem("title1",JSON.stringify(user_info))

  return <>

  </>
}

export default App