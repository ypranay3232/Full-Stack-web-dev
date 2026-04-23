import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white  '>

        {/* here we will have a img and some text and a hero img/video */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=' inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full '>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium  '>Trusted by 1M+ users</p>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl '>Turning imaginations into <span className=' bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent '> reality.</span></motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=' text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-2-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital expressions</motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className=' relative  '>
            <img src={assets.hero_img} className=' w-full max-w-6xl' alt="" />
            {/* to add the gradient color as bg */}
            <img src={assets.bgImage1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden ' alt="" />
        </motion.div>

    </div>
  )
}

export default Hero