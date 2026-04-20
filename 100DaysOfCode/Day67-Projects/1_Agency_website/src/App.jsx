import React, { useState } from 'react'
import NavBar from './components/NavBar'
import CustomCursor from './components/CustomCursor'

const App = () => {

  // now we add a state 
  const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light' )

  return (
    <div className='dark:bg-black relative'>
      <CustomCursor />
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  )
}
export default App