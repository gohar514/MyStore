import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/8891961/pexels-photo-8891961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover  h-[55vh] md:h-screen bg-center my-3 rounded-2xl mx-2 md:mx-3  '>
         <div className="  max-sm:pt-[10vh] md:pt-[40vh]   flex flex-col justify-center  items-center text-center p-4">
         <h1 className=" pt-4 text-4xl md:text-6xl lg:text-7xl font-bold text-black   mb-4">
           Welcome to <br /> {""}
           <ReactTyped
          strings={[  'Depict']}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
         </h1>
         
         <p className="text-lg md:text-2xl text-black text-opacity-70 mb-8">
           Find the best products for the best prices
         </p>
         {/* <a href="#shop" className="bg-white bg-opacity-70  hover:bg-black hover:bg-opacity-70 hover:text-white text-black font-bold py-3 px-6 rounded-lg">
           Shop Now
         </a> */}
         <button className="relative  text-black font-bold py-2 px-4 rounded-full overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    <span className="relative z-10">Shop now</span>
    <span className="absolute inset-0 bg-gradient-to-r from-custom to-custom border-2 border-transparent rounded-full"></span>
</button>
         

      </div>
        
        

    </div>
    // <div className="relative lg:h-screen p-1 my-3 bg-white rounded-2xl mx-2 md:mx-3">
    //   <img 
    //     src="https://images.pexels.com/photos/16109180/pexels-photo-16109180/free-photo-of-silver-chain-with-zircon-and-jewelry-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //     alt="Hero"
    //     className="absolute inset-0 w-full lg:h-full rounded-2xl bg-white object-contain lg:object-cover max-sm:h-[540px] max-sm:w-auto  "
    //   />
    //   <div className="relative    flex flex-col justify-center  items-center text-center p-4">
    //     <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
    //       Welcome to Depict
    //     </h1>
    //     <p className="text-lg md:text-2xl text-gray-200 mb-8">
    //       Find the best products for the best prices
    //     </p>
    //     <a href="#shop" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg">
    //       Shop Now
    //     </a>
    //   </div>
    // </div>
  );
};

export default Hero;