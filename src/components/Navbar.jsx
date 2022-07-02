import React from 'react'

import {MenuIcon } from '@heroicons/react/outline'



export const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-indigo-50 fixed drop-shadlow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'> Witches Cloud. </h1>
                <ul className='hidden md:flex'>
                    <li> Home </li>
                    <li> About </li>
                    <li> Support </li>
                    <li> Platforms </li>
                    <li> Pricing </li>
                </ul>
            </div>
        </div>

        <MenuIcon className='w-5' />
    </div>
  )
}

export default Navbar
