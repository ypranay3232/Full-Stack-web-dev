import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const OurWork = () => {

    // to display the work data (img,title,desc) we create a data array 
    const workdata = [
        {
            title : ' Mobile app marketing ',
            desc : ' we turn bold ideas into powerful digital solutions that connect, engage etc..',
            Image : assets.work_mobile_app
        },
        {
            title : ' Dashboard management ',
            desc : ' we help you execute your plan and deliver results ',
            Image : assets.work_dashboard_management
        },
        {
            title : ' Fitness app promotion ',
            desc : ' we help you to create a marketing strategy that drives results ..',
            Image : assets.work_fitness_app
        }
    ]

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
        <Title title=' Our Latest Work ' desc=' From Strategy to execution, we craft digital solutions that move your business forward. ' />
    
        <div className='grid sm:grid-col-2 lg:grid-cols-3 gap-6 w-full max-w-5xl '>
        
        {
            workdata.map((work,index)=>(
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                    key={index} 
                    className='cursor-pointer'>
                    <img src={work.Image} className='w-full rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className=' text-sm opacity-60 w-5/6 '>{work.desc}</p>
                </motion.div>
            ))
        }

        </div>

    </div>

  )
}

export default OurWork