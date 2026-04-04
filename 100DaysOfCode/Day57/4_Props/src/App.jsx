import React from "react";
import Card from "../Components/CardsEx"

const App = () =>{
  return (
    <div className="parent">
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
      {/* if we want to add more cards we can copy paste but it makes APP component messy and it is the first to render so we create a folder named component and we make cards components and reuse them here */}
            <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1670274385170-27ef1dc7ecd6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div> 
      {/* so we create a card component and we reuse it here  */}
      {/* now the issue here is how to change data for each individual card ? so we use props */}
      {/* Props is just a keyword : via which we send data from a parent and, The data sent is always from top to bottom it can never be from bottom to top. */}
      {/* Here in this case : App.jsx is parent and cardsEx is child so we can send data from app.jsx to cardsEX.jsx but cant send Data from CardEx.jsx to App.jsx */}
      
      {/*This is a tag in simple terms so we can use custom attributes here so this is called a Prop (properties): so we create a username (.i.e. when a component contains a property(attribute) we call it props)  */}

      {/* Props always return an obj so it must have a reliever inside the card component (argument) so add one  */}
      {/* now to implement the changes in cards go to cardsEx component  in H1 replace everything with cards_props.user */}
      <Card user='John' age={26} img="https://images.unsplash.com/photo-1727800922947-8da4d48c9fb5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="David" age={23} img="https://images.unsplash.com/photo-1771747131849-41056d3d9be3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
      <Card user="henry" age={21} img="https://images.unsplash.com/photo-1769762831275-006982c097d2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}
export default App