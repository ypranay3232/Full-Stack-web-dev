import React from 'react';

const RightCard = ({ imageSrc }) => {
    return (
        <div className='h-full flex-1 rounded-3xl overflow-hidden relative group shadow-lg'>
            <img 
                className='absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
                src={imageSrc} 
                alt="Image" 
            />
        </div>
    );
};

export default RightCard;