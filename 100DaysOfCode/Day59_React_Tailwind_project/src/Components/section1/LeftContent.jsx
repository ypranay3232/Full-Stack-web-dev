import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 p-6 flex flex-col justify-between overflow-hidden rounded-2xl'>
      
      <div className='p-4'>
        <h3 className='text-4xl lg:text-6xl font-bold mb-7 leading-[1.1]'>Prospective <br /> <span className='text-gray-400'>customer </span>  <br /> segmentation </h3>

        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque, cum quia nisi in ullam distinctio possimus explicabo sint. Suscipit qui quis.</p>
      </div>

      <div className='cursor-pointer'>
        <ArrowUpRight size={80} />
      </div>

    </div>
  )
}

export default LeftContent