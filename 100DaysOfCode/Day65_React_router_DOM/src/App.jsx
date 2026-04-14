import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

// Routing : React does not allow routing by default so we use "react router Dom library" so that we can create SPA(single page) applications. npm i react-rouer-dom

// React router dom provides us with multiple routers ex : Browser router  --> we mostly use this it allows us to "do routing inside browser" and its all "client based routing"

// Hash router : it is used when we want to hide things from server it and it stores url in hash. 


// to implement go to main.jsx which renders app.jsx so wrap the <app> component within <BrowserRouter> <APP> <browserRouter>

// now inside src create a folder pages and create some pages, then import routes her in app.jsx 

const App = () => {
  return <>
    <Routes>
      {/* each route contains a path and a element to render : so whenever we go to /home we redirect to home page but before that import the home page into app.jsx*/}
      <Route path='/home' element={<Home/>} /> 

    </Routes>

  </>
}
export default App