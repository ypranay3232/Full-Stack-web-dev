import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-gray-600'>
          <p>Etoffe de Luxe was born out of a passion for innovation and a relentless desire to redefine the online shopping experience. Our journey began with a simple idea: to create a platform where customers can easily discover, explore, and purchase a wide range of high-quality products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of products that cater to every taste, style, and need. From fashion and beauty to electronics and home essentials, we source only the best to ensure that our customers receive exceptional value with every order.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Etoffe de Luxe is to empower customers with choice, convenience, and confidence. We are committed to delivering a seamless shopping experience, from browsing to checkout and beyond, while maintaining the highest standards of quality and service.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards. From materials to manufacturing, excellence is our priority.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our intuitive interface and hassle-free ordering process, shopping has never been easier. Find what you love and checkout in seconds.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your shopping experience is positive and memorable.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About