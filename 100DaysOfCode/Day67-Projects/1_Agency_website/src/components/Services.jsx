import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
  
    // We store all the services in an array and display them in a card
    const ServicesData = [
        {
            title: 'Advertising',
            description: 'We turn the ideas into powerful digital solutions that connect, engage..',
            icon: assets.ads_icon
        },
        {
            title: 'Connect Marketing',
            description: 'We Help you execute your plan and deliver results..',
            icon: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategies that drives results..',
            icon: assets.content_icon
        },
        {
            title: ' Social media ',
            description: 'We help you build a strong social media presence and engage with your audience..',
            icon: assets.social_icon
        },
    ]
    return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px40 pt-30 text-gray-700 dark:text-white '>   
    <img src={assets.bgImage2} className=' absolute -top-110 -left-70 -z-1 dark:hidden ' alt="" />
        {/* now here we create a title.jsx  */}
        <Title title=' How can we help? ' desc=' From strategy to execution, we craft digital solutions that move your business forward. ' />

        {/* imported from servicecard.jsx */}
        <div className='flex flex-col md:grid grid-cols-2'>
            {ServicesData.map((service,index)=>(
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>

    </div>
  )
}

export default Services