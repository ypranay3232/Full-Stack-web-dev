import React, { useState } from 'react'
import NavBar from './components/NavBar'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light' )

  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <CustomCursor />
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero/>
      <Trustedby/>
      <Services/>
      <OurWork/>
      <ContactUs/>
      <Footer theme={theme} />
    </div>
  )
}
export default App