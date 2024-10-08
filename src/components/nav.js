"use client";

import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navname = process.env.NEXT_PUBLIC_NAME;
  const spanhighlight = process.env.NEXT_PUBLIC_HIGHLIGHT;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='py-3 px-4 w-full fixed z-50 bg-white shadow-md'>
        <nav className='flex flex-wrap justify-between px-0 sm:px-4'>
          <a href='/'>
          <div className='flex flex-wrap gap-1 sm:gap-4 items-center'>
            <img
              src='https://i.imgur.com/C6Nd1I0.png'
              alt='logo'
              className='w-8 h-8 sm:w-12 sm:h-12'
              width="48"
              height="48"
              loading="lazy"
            />
            <h1 className='text-xl sm:text-2xl font-semibold'>
              {navname ? navname : 'Cipher'}
              <span className='text-[#007BFF]'>{spanhighlight ? spanhighlight : 'Auth'}</span>
            </h1>
          </div>
          </a>
          <div className='hidden md:flex flex-wrap items-end gap-6'>
            <button className='py-2 px-6 rounded-lg text-[#007BFF] border-2 border-[#007BFF] text-center transition-all hover:bg-[#007BFF] hover:text-white text-lg'>
              <Link href="/auth/signin">
                Sign In
              </Link>
            </button>
            <button className='py-3 px-6 bg-[#007BFF] text-[#ffffff] hover:bg-blue-800 transition-all rounded-lg'>
              <Link href="/auth/signup">
                Sign Up
              </Link>
            </button>
          </div>
          <div className='flex flex-col md:hidden items-center justify-center cursor-pointer' onClick={toggleMenu}>
            <RxHamburgerMenu className='text-3xl' />
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div
          className={`fixed top-16 left-0 w-full bg-white shadow-lg z-40 transition-opacity duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
          style={{ willChange: 'opacity, transform' }}
        >
          <hr />
          <div className='flex flex-col items-center py-4 px-2'>
            <button className='py-3 w-full rounded-lg text-center text-[#007BFF] font-semibold text-lg'>
              <Link href="/auth/signin">
                Sign In
              </Link>
            </button>
            <button className='py-4 w-full text-center bg-[#007BFF] text-[#ffffff] rounded-lg mt-2'>
              <Link href="/auth/signup">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </header>
      <br />
    </>
  );
};

export default Nav;
