import React from 'react'
import RightCard from './RightCard'


const RightContent = () => {
  return (
    <div className='h-full p-6 w-2/3 bg-blue-600 rounded-2xl flex gap-6'>
      <RightCard imageSrc="https://plus.unsplash.com/premium_photo-1722009043656-a43537f0f7d7?q=80&w=707&auto=format&fit=crop" />
      <RightCard imageSrc="https://images.unsplash.com/photo-1701870856791-12a03982d431?q=80&w=1170&auto=format&fit=crop" />
      <RightCard imageSrc="https://images.unsplash.com/photo-1701870856515-82eba2ec6736?q=80&w=1170&auto=format&fit=crop" />
    </div>
  )
}

export default RightContent