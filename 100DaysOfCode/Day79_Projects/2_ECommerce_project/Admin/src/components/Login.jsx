import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(backendUrl + '/api/user/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (data.success) {
        setToken(data.token)
        localStorage.setItem('token', data.token)
        toast.success("Admin Logged In Successfully")
      } else {
        toast.error(data.message || "Invalid Credentials")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='bg-white shadow-md rounded-lg px-8 py-10 max-w-md w-full border border-gray-200'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800 text-center prata-regular'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black' 
              type="email" 
              placeholder='admin@etoffedeluxe.com' 
              required 
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black' 
              type="password" 
              placeholder='Enter your password' 
              required 
            />
          </div>
          <button className='w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium cursor-pointer' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
