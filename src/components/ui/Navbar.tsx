import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex h-[10vh] w-full justify-between bg-white shadow-md'>
      <div className='flex w-[20%] items-center justify-center gap-4'>
        <Image
          src='/Images/logo.svg'
          alt='Logo'
          width={50}
          height={50}
        />
        <div className='flex items-center gap-4'>
          <h1 className='text-2xl font-bold text-black'>Volunteer App</h1>
        </div>
      </div>
      <div className='flex w-[20%] items-center justify-center gap-4'>
        <a href="#" className='text-black'>Home</a>
        <a href="#" className='text-black'>About</a>
        <a href="#" className='text-black'>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;