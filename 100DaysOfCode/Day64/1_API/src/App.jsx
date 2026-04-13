import React from "react";
import axios from "axios"

// We use Api's to connect frontend with backend. From frontend or backend (both ways)we can call (request) the api and we get a response. 


// So we get data from database and backend takes the data from db and sends it to frontend. 

const App = () => {


  // function Fetchdata(){
  //   console.log("Got the data")
  // }

  // To call an api we have two methods in React 1) fetch 3) Axios. (Axios is a third party library) fetch() is a built in method

  // function Apicallusingfetch() {
  //   const response =  fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)//here we get the response in the form of promise : Js by default is sync but while fetching data it acts async. 
  // }
  // In simple terms when we fetch the data it takes some time to get data but js moved forward and console log the results so to fix we use async await (we say that this is an async(will execute as it sees fit) function and wait until you get response)

  // async function fetchex(){
  //   const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(resp)
  // }

  // Lets see how to make a api call using axios : npm i axios and import it. Same here we have to use async await or .then
  const axios_example = async () =>{
    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(resp);
  }
  return <>

    {/* <button onClick={Fetchdata}>Get Data</button> */}
    <button onClick={() =>{
      Apicallusingfetch(), fetchex()
    }}>Get Data</button>

  {/* axios */}
  <button onClick={axios_example}>Get data</button>
  </>
}
export default App