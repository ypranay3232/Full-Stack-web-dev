import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
    return (
        <div className='bg-slate-50 dark:bg-gray-900 pt-16 mt-20 sm:mt-40 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300'>
            <div className='px-4 sm:px-10 lg:px-24 xl:px-40'>
                {/* Top footer */}
                <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 pb-12 border-b border-gray-200 dark:border-gray-800'>
                    
                    {/* Brand & Description */}
                    <div className='space-y-6 flex-1 max-w-md'>
                        <img src={theme === 'dark' ? assets.logo_dark :  assets.logo} className='w-32 sm:w-44 transition-opacity duration-300' alt="Agency Logo" />
                        <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                            From strategy to execution, we craft digital solutions that move your business instantly forward. Building experiences that inspire.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className='flex-1'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-6'>Quick Links</h3>
                        <ul className='grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400'>
                            <li><a className='hover:text-primary dark:hover:text-primary transition-colors inline-block' href="#hero">Home</a></li>
                            <li><a className='hover:text-primary dark:hover:text-primary transition-colors inline-block' href="#services">Services</a></li>
                            <li><a className='hover:text-primary dark:hover:text-primary transition-colors inline-block' href="#our-work">Our Work</a></li>
                            <li><a className='hover:text-primary dark:hover:text-primary transition-colors inline-block' href="#contact-us">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className='flex-1 max-w-md'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Subscribe to our Newsletter</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                            Get the latest insights, updates, and special offers delivered directly to your inbox.
                        </p>
                        <form className='flex flex-col sm:flex-row gap-3' onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                required
                                className='w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
                            />
                            <button 
                                type="submit"
                                className='px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all whitespace-nowrap'
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className='py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400'>
                    <p>© {new Date().getFullYear()} Agency. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <a href="#" className='hover:text-primary transition-colors'>Privacy Policy</a>
                        <a href="#" className='hover:text-primary transition-colors'>Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer