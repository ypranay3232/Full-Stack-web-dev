import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  if (token === '') {
    return (
      <>
        <ToastContainer />
        <Login setToken={setToken} />
      </>
    )
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      <Navbar setToken={setToken} />
      <hr className='border-gray-200' />
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-[82%] min-h-screen bg-gray-50'>
          <Routes>
            <Route path='/add' element={<Add token={token} />} />
            <Route path='/list' element={<List token={token} />} />
            <Route path='/orders' element={<Orders token={token} />} />
            <Route path='*' element={<List token={token} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
