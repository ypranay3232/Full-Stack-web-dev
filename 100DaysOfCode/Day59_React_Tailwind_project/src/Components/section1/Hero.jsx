import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Hero = () => {
  return (
    <div className='py-8 flex gap-8 h-full px-16 rounded-3xl'>
        <LeftContent />
        <RightContent />
    </div>
  );
};

export default Hero;