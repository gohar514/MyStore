import React from 'react'
import depictLogo from '../assets/depictLogo.png'
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-1 my-3 rounded-2xl mx-2 md:mx-3 sticky top-0 hover:scale-95 duration-300 ">
      <div className="flex items-center justify-between flex-wrap">
        <div>
      <img src={depictLogo} className=' w-[150px] md:w-[200px] p-3 rounded-2xl'  alt="" />
      </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full block  lg:flex lg:items-center lg:justify-between  lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-sm lg:text-lg lg:mr-10 ">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0  lg:mx-6 lg:px-6 text-white hover:text-gray-400 mr-4"
            >
              Home
            </a>
            
            
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 lg:mx-6 lg:px-6 text-white hover:text-gray-400 mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 lg:mx-6 lg:px-6 text-white hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
//   return (
//     <div className='w-[90%] mx-auto border border-red-400 rounded-xl bg-white  px-4 py-1 '>
//         <div>
//             <div>
//             <img src={depictLogo} className=' w-[100px] md:w-[150px]'  alt="" />
//             </div>
//             <div>

//             </div>
//         </div>

//     </div>
//   )
// }

export default Nav