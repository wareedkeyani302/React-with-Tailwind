import React from 'react'
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  return (
    <nav className='w-full h-14 bg-indigo-200 justify-between px-4 md:px-4 items-center flex'>
        <div className='text-2xl font-bold text-indigo-700'>PW Skills </div>
            <ul className='md:flex font-semibold hidden'>
                <li className='mx-[10px] cursor-pointer'>Home</li>
                <li className='mx-[10px] cursor-pointer'>About Us</li>
                <li className='mx-[10px] cursor-pointer'>Contact</li>
            </ul>
            <div className='hidden md:block bg-indigo-700 font-bold cursor-pointer text-white rounded px-2 py-2'>Login/Signup</div>
            <div className='md:hidden'>
                <HiBars3 className='text-4xl' />
            </div>  
    </nav>
  )
}

export default Header;