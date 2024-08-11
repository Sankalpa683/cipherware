import React from 'react'
import Nav from '@/components/nav'

const signup = () => {
  return (
    <>
      <main>
        <Nav />
        <section className='w-full bg-gradient-to-r from-blue-100 to-blue-200 px-3 min-h-screen flex flex-col flex-wrap justify-center items-center text-center'>
          {/* <img src="https://i.imgur.com/C6Nd1I0.png" className='w-full sm:w-20 sm:h-20 py-6'/> */}
          <div className='shadow-nice p-6 w-full sm:w-1/2 bg-white h-fit rounded-md '>
            <div className='pt-0 pb-2'>
              <h1 className='text-3xl font-semibold pt-1 pb-4 text-gray-600'>Register <span className='text-blue-400'>Now!</span></h1>
              <p className='text-gray-400 font-thin'>Enter your credentials below to register your account</p>
            </div>
            <hr />
            <div>
              <div className='flex flex-col flex-wrap gap-8 py-8'>
                <input type='text' placeholder='Username' className='p-2 bg-gray-100 rounded-lg outline-none border-none w-full' />
                <input type='email' placeholder='helloworld@gmail.com' className='p-2 bg-gray-100 rounded-lg outline-none border-none w-full' />
                <input type='password' placeholder='***********' className='p-2 bg-gray-100 rounded-lg outline-none border-none w-full' />
                <input type='password' placeholder='Confirm Password' className='p-2 bg-gray-100 rounded-lg outline-none border-none w-full' />

                <div className='py-2 w-full'>
                  <button className='bg-blue-500 text-white p-2 w-full rounded-lg transition-all hover:bg-blue-700'>Login</button>
                </div>
              </div>
              <hr />
              <div className='flex flex-wrap flex-col items-center justify-center pt-3 pb-1 gap-4'>
                <h2 className='text-lg '>
                  Already have an account? <a href='/auth/signin' className='text-blue-500'>SignIn</a>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default signup