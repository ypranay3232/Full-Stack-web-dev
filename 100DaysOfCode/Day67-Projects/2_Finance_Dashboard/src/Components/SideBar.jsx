import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  Package,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Hexagon
} from 'lucide-react';

const SideBar = () => {

  const MainNavItems = [
    { name: 'Analytics', path: '/analytics', icon: LayoutGrid },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Messages', path: '/messages', icon: MessageSquare },
    { name: 'Customers', path: '/customers', icon: Users },
  ];

  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#1f2128] flex flex-col py-8 px-6 border-r border-gray-100 dark:border-gray-800 z-10 transition-colors">
      <div className="flex items-center gap-3 mb-10 pl-2">
        <Hexagon className="w-8 h-8 text-indigo-600 fill-indigo-600" />
        <span className="text-xl font-bold text-gray-900 dark:text-white">Business</span>
      </div>

      <nav className='flex flex-col gap-2'>
        {MainNavItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm
              ${isActive
                ? 'bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
              }`}
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className='flex flex-col gap-2 mt-8'>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 w-full text-left">
          <Settings className="w-5 h-5" />
          Settings
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 w-full text-left">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>

      <div className="mt-auto">
        <div className="bg-[#eff4ff] dark:bg-white/5 rounded-2xl p-5 flex flex-col items-center text-center relative pt-12">
          <div className="absolute -top-8 w-16 h-16 bg-indigo-200 rounded-full border-4 border-white dark:border-[#1f2128] flex items-center justify-center overflow-hidden">
             <img src="https://i.pravatar.cc/150?img=68" alt="Support" className="w-full h-full object-cover" />
          </div>

          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Need help</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">feel free to contact</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 px-6 rounded-full transition-colors w-full">
            Get support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;