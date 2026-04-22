import React, { useState } from 'react'
import NavBar from './components/NavBar'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'

const App = () => {

  // now we add a state 
  const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light' )

  return (
    <div className='dark:bg-black relative'>
      <CustomCursor />
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero/>
      <Trustedby/>
    </div>
  )
}
export default App