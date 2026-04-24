import React from 'react'
import SideBar from './Components/SideBar'

const App = () => {
  return (
    // The main container holding the whole screen
    <div className="flex h-screen bg-gray-50 font-sans">
      <SideBar />

      {/* This is the placeholder for the right side of the screen */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl text-gray-400">Main Content Area</h1>
      </main>
    </div>
  )
}

export default App