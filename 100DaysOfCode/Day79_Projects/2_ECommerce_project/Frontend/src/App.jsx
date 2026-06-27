import React from "react";
import { Routes, Router, Route } from "react-router-dom"
import { Home, Collection, About,Contact,Product,Cart,Login,PlaceOrder,Orders } from "./routes"

const App = () => {

  return <>
    <div className="px-4 sm:px-[5vw] md:px-[7w] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* when we open a product it should open with an product id for each product */}
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/placeorder' component={<PlaceOrder/>}/>
        <Route path='/orders' component={<Orders/>}/>
        

      </Routes>
    </div>
  </>

}