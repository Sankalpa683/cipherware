"use client"

import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navname = process.env.NEXT_PUBLIC_NAME;
  const spanhighlight = process.env.NEXT_PUBLIC_HIGHLIGHT;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server side

  return (
    <>
      <header className='p-2 w-full fixed z-50 bg-white shadow-md'>
        <nav className='flex flex-wrap justify-between px-0 sm:px-4'>
          <div className='flex flex-wrap gap-1 sm:gap-4 items-center'>
            <img src='https://i.imgur.com/C6Nd1I0.png' alt='logo' className='w-8 h-8 sm:w-12 sm:h-12' />
            <h1 className='text-xl sm:text-2xl font-semibold'>
              {navname ? navname : 'DefaultName'}
              <span className='text-[#007BFF]'>{spanhighlight ? spanhighlight : ''}</span>
            </h1>
          </div>
          <div className='hidden md:flex flex-wrap items-end gap-6'>
            <button className='py-2 px-6 rounded-lg text-[#007BFF] border-2 border-[#007BFF] text-center transition-all hover:bg-[#007BFF] hover:text-white text-lg'>Sign In</button>
            <button className='py-3 px-6 bg-[#007BFF] text-[#ffffff] hover:bg-blue-800 transition-all rounded-lg'>Sign Up</button>
          </div>
          <div className='flex flex-col md:hidden items-center justify-center cursor-pointer' onClick={toggleMenu}>
            <RxHamburgerMenu className='text-3xl ' />
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 left-0 w-full bg-white shadow-lg z-40"
            >
              <hr/>
              <div className='flex flex-col items-center py-4 px-2'>
                <button className='py-3 w-full rounded-lg text-center text-[#007BFF] font-semibold text-lg'>Sign In</button>
                <button className='py-4 w-full text-center bg-[#007BFF] text-[#ffffff] rounded-lg mt-2'>Sign Up</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <hr />
      <br/>
    </>
  );
}

export default Nav;
