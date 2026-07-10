import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white'>
      <div className='flex flex-col gap-1 pt-6 pl-[20%] text-[15px]'>
        
        <NavLink 
          to='/add' 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2.5 rounded-l hover:bg-gray-50 transition-colors ${isActive ? 'bg-pink-50 border-pink-300 font-semibold text-pink-600' : 'text-gray-700'}`
          }
        >
          <div dangerouslySetInnerHTML={{ __html: assets.add_icon }} />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink 
          to='/list' 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2.5 rounded-l hover:bg-gray-50 transition-colors ${isActive ? 'bg-pink-50 border-pink-300 font-semibold text-pink-600' : 'text-gray-700'}`
          }
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink 
          to='/orders' 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2.5 rounded-l hover:bg-gray-50 transition-colors ${isActive ? 'bg-pink-50 border-pink-300 font-semibold text-pink-600' : 'text-gray-700'}`
          }
        >
          <div dangerouslySetInnerHTML={{ __html: assets.order_icon }} />
          <p className='hidden md:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
