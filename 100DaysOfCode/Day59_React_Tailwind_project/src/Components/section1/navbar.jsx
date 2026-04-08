import React from 'react';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-6'>
      <button className='bg-black text-white px-6 py-2 rounded-full uppercase text-sm cursor-pointer hover:bg-zinc-800 transition-colors'>
        Contact us
      </button>
      <button className='bg-gray-200 text-black px-6 py-2 uppercase rounded-full tracking-wider text-sm cursor-pointer hover:bg-gray-300 transition-colors'>
        Digital Tourist platform
      </button>
    </div>
  );
};

export default NavBar;