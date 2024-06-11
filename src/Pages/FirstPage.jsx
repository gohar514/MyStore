import React from 'react'
import Hero from '../Compo/Hero'
import BestSeller from '../Compo/BestSeller'
import New from '../Compo/New'
import Footer from '../Compo/Footer'

const FirstPage = () => {
  return (
    <>
    <Hero />
    <p className='text-2xl md:3xl lg:text-4xl font-bold mx-2 mt-5 mb-0'>Best Sellers</p>
    <BestSeller/>
    <p className='bg-white rounded-xl'> <New /></p>
    <p className='bg-black rounded-xl'> <Footer /></p>
    
    
    </>
  )
}

export default FirstPage