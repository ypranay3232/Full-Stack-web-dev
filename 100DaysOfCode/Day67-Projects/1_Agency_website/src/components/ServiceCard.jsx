import React, { useState, useRef } from 'react'

const ServiceCard = ({ service, index }) => {

    // ref to access the glow element directly without re-rendering we use useref()
    const glowRef = useRef(null);

    // state to change the position 
    // (Note: We are keeping this commented out or removing it because useRef replaces it)
    // const [position, setPosition] = useState({ x: 0, y: 0 })

    // To move the color effect for the servicecard's we add another state.
    const [visible, setVisible] = useState(false)

    // Function to calculate mouse position relative to the card 
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Directly updating the DOM for better performance
        if (glowRef.current) {
            glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
        }
    };

    return (
        <div
            className=' relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 '
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
        >

            <div
                ref={glowRef}
                className={` pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-75 h-75 absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
                style={{ 
                    top: 0, 
                    left: 0,
                    willChange: 'transform' // Optimizes for GPU animation
                }}
            />

            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

                <div className=' bg-gray-100 dark:bg-gray-700 rounded-full '>
                    <img src={service.icon} className=' max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' alt="" />
                </div>
                {/* here we add title and description  */}
                <div className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className=' text-sm mt-2 '>{service.description}</p>
                    {/* Now we attach this to the services.jsx */}
                </div>

            </div>

        </div>
    )
}

export default ServiceCard