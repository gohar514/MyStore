import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Compo/Nav'

const Navv = () => {
  return (
    
    <>
     <Nav />
    <Outlet />
    
   
    </>
  )
}

export default Navv