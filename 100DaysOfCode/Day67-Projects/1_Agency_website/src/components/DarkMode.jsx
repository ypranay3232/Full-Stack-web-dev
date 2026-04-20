import React, { useEffect } from 'react'
import assets from '../assets/assets'

// Props : theme, setTheme
const DarkMode = ({ theme, setTheme }) => {

    // Useeffect : we pass a dependency array and we add theme. so whenever theme changes this block gets executed
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        // we store the settings in local storage
        localStorage.setItem('theme', theme)
    }, [theme])

    // as per device preference : 
    useEffect(()=>{
        const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(theme || (preferDarkMode ? 'dark' : 'light' ))

    }, [theme, setTheme])

    return (
        <>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' alt="" />
                ) : (
                    <img onClick={() => setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer' alt="" />
                )}
            </button>
        </>
    )
}

export default DarkMode