import React from 'react';
import { Calendar, Sun, Moon } from 'lucide-react';

const Header = ({ isDark, toggleTheme }) => {
    return (
        <header className='flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4'>
            {/* Left side we have Title and a date picker */}
            <div className='flex items-center gap-6'>
                <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Analytics</h1>

                <button className='flex items-center gap-3 bg-white dark:bg-[#222230] border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-xl text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                    <span>01. 08 .2022 - 31. 08. 2022</span>
                    <Calendar className='w-4 h-4 text-gray-400' />
                </button>
            </div>

            {/* Right side dark and light theme toggle */}
            <div className="flex items-center gap-6 sm:gap-8">
                {/* Theme Toggle */}
                <div className="flex items-center gap-1 bg-[#eff4ff] dark:bg-gray-800 rounded-full p-1 border border-[#e0e8f9] dark:border-gray-700">
                    <div 
                        onClick={() => isDark && toggleTheme()}
                        className={`p-1.5 rounded-full cursor-pointer transition-colors ${!isDark ? 'bg-white shadow-sm' : 'hover:bg-white/10'}`}
                    >
                        <Sun className={`w-4 h-4 ${!isDark ? 'text-indigo-600' : 'text-gray-400'}`} />
                    </div>
                    <div 
                        onClick={() => !isDark && toggleTheme()}
                        className={`p-1.5 rounded-full cursor-pointer transition-colors ${isDark ? 'bg-[#2a2a3c] shadow-sm' : 'hover:bg-white/50'}`}
                    >
                        <Moon className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-gray-400'}`} />
                    </div>
                </div>

                {/* User Profile  */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/150?img=47"
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Kristi Kamiykova</span>
                </div>
            </div>
        </header>
    )
}

export default Header;