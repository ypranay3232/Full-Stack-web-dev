import React from "react";
import { Routes, Router, Route } from "react-router-dom"
import Home from "./routes/Home";
import Collection from "./routes/Collection";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import PlaceOrder from "./routes/PlaceOrder";
import Orders from "./routes/Orders";
import NavBar from "./components/NavBar";

const App = () => {

  return <>
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* when we open a product it should open with an product id for each product */}
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

      </Routes>
    </div>
  </>

}

export default App;