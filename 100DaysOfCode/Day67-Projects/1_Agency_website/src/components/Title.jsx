import React from 'react'
import { motion } from 'framer-motion'

// passing props title and desc
const Title = ({title,desc}) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
    >
    <h1 className=' text-3xl sm:text-5xl font-medium '>{title}</h1>
    <p className=' max-w-lg text-center text-gray-500 dark:text-white/75 mb-6 '>{desc}</p>

    </motion.div>
  )
}

export default Title