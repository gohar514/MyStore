import React from 'react'
import depictLogo from '../assets/depictLogo.png'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto flex flex-col sm:flex-row h-auto  text-white  '>
        <div className='sm:w-[50%] sm:my-auto sm:ml-3 '>
        <img src={depictLogo} className=' w-[150px] md:w-[150px] p-3 rounded-2xl'  alt="" />
       <p className='py-4 pl-3'>"Embrace your inner sparkle with our exclusive collection of women’s jewelry. From timeless classics to contemporary designs, we offer pieces that celebrate every style and occasion. Stay connected for the latest trends, special offers, and more. Join our community and shine brighter with us!"</p>

       <div className='flex p-4 pl-0 justify-around '>
       <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
       </div>

        </div>
        <div className='sm:w-[70%] flex justify-around items-start  my-auto  text-gray-400 font-medium '>
           <div className='flex flex-col '>
           <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
           </div>
           <div className='flex flex-col '>
            <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Contect</li>
        </ul>
           </div>
          
        </div>

    </div>
  )
}

export default Footer