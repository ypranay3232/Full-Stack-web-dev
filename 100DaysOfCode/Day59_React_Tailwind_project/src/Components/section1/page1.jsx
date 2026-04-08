import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const Page1 = () =>{
    return (
        <div className='h-screen w-full flex flex-col'>
            <NavBar />
            <div className='flex-1 min-h-0'>
                <Hero />
            </div>
        </div>
    )
}
export default Page1