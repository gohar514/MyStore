import React from 'react';

const ProductCard = ({ image, caption, price }) => {
  return (
    <div className="bg-white   overflow-hidden   ">
      <img src={image} alt={caption} className="w-[90%] mx-auto h-full  object-cover hover:scale-105 duration-300 shadow-lg rounded-xl  mt-3" />
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-center text-black">{caption}</h2>
        <p className="text-gray-800 mt-1 text-center">Rs.{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;