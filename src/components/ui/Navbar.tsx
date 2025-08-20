import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='h-[10vh] w-full bg-white shadow-md flex justify-between'>
            <div className='w-[20%] flex items-center gap-4 justify-center'>
                <Image
                    src='/Images/logo.svg'
                    alt='Logo'
                    width={50}
                    height={50}
                />
            <div className='flex items-center gap-4'>
                <h1 className='text-black text-2xl font-bold'>Volunteer App</h1>
            </div>
            </div>
        <div className='w-[20%] flex items-center gap-4 justify-center'>
          <a href="#" className='text-black'>Home</a>
          <a href="#" className='text-black'>About</a>
          <a href="#" className='text-black'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar