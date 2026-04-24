import React from 'react'
import {
  LayoutGrid,
  Package,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Hexagon,
  User
} from 'lucide-react'

const SideBar = () => {

  //  we store all the Nav items in an array 
  const MainNavItems = [
    { name: 'Analytics', icon: LayoutGrid, isActive: true },
    { name: 'Products', icon: Package, isActive: false },
    { name: 'Messages', icon: MessageSquare, isActive: false },
    { name: 'Customers', icon: Users, isActive: false },
  ];

  return (
    // now we create a sidebar and place the nav items int here: 
    <aside className="w-64 h-screen bg-white flex flex-col py-8 px-6 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] z-10">

      {/* now first we style the Logo section in Sidebar (.i.e. : top section of sidebar)  */}
      <div className="flex items-center gap-3 mb-10 pl-2">

        <Hexagon className="w-8 h-8 text-indigo-600 fill-indigo-600" />
        <span className="text-xl font-bold text-gray-900">Finonciolo</span>
      </div>

      {/* Main section with nav items */}

      <nav className='flex flex-col gap-2'>
        {/* because they all are in an array we can map it */}
        {MainNavItems.map((item) => (
          <button
            key={item.name}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm
              ${item.isActive
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </button>
        ))}
      </nav>

      {/* The bottom section for settings and signout */}
      <div className='flex flex-col gap-2'>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50">
          <Settings className="w-5 h-5" />
          Settings
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>

      </div>

      {/* Image section  */}
      <div className="mt-auto">
        {/* 4. Help Card */}
        <div className="bg-[#eff4ff] rounded-2xl p-5 flex flex-col items-center text-center relative pt-12">
          {/* Placeholder for the person image - we use a div for now */}
          <div className="absolute -top-8 w-16 h-16 bg-indigo-200 rounded-full border-4 border-white flex items-center justify-center overflow-hidden">
            <span className="text-2xl">👋</span>
          </div>

          <h4 className="text-sm font-bold text-gray-900 mb-1">Need help</h4>
          <p className="text-xs text-gray-500 mb-4">feel free to contact</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 px-6 rounded-full transition-colors w-full">
            Get support
          </button>
        </div>
      </div>
    </aside>
  )
}

export default SideBar