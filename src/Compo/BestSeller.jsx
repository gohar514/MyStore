import React from 'react'
import ProductCard from './ProductCard'

const BestSeller = () => {
  return (
    <div className='my-3 rounded-2xl mx-2 md:mx-3 grid min-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 '>
        <div>
        <ProductCard image={"https://images.pexels.com/photos/13595434/pexels-photo-13595434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
        caption={"Neckless"}
        price={"3000"}
        />
        </div>
        <div>
        <ProductCard image={"https://images.pexels.com/photos/13595296/pexels-photo-13595296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
        caption={"Neckless"}
        price={"300"}
        />
        </div>
        <div>
        <ProductCard image={"https://images.pexels.com/photos/7700270/pexels-photo-7700270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
        caption={"Neckless"}
        price={"300"}
        />
        </div>
        <div>
        <ProductCard image={"https://images.pexels.com/photos/9565894/pexels-photo-9565894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
        caption={"Neckless"}
        price={"300"}
        />
        </div>

    </div>
  )
}

export default BestSeller