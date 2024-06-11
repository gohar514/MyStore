import React from 'react'

const New = () => {
  return (
    <div className='max-w-[1240px]  h-80 justify-center items-center   flex flex-col md:flex-row  max-sm:my-7 my-3 rounded-2xl mx-2 md:mx-3 '>
        <div className='lg:w-2/3 max-md:mx-4 '>
            <h1 className='text-2xl text-black font-bold lg:text-4xl'>Don't miss out on the latest in luxury and elegance!</h1>
            <p className='pt-2 text-black'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='lg:w-1/3  max-md:mt-10  '>
            <div className='flex flex-col sm:flex-row  max-md:mx-4 '>
                <div>
                    <input className='py-1 px-6 border border-black rounded-md max-md:w-full ' type="email" placeholder='Enter your Email' />

                </div>
                <div>
                 <button className='bg-black px-2 py-1 max-sm:mt-3  text-white ml-1 rounded-md truncate'>Notify Me</button>
                </div>

            </div>
            
            <div className='mt-3 text-black max-md:mx-4 max-sm:mb-2' >
            We care bout the protection of your data. Read our{' '} 
            <span className='text-gray-500'>Privacy Policy.</span>
            </div>
            
        </div>
    </div>
  )
}

export default New