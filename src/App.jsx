import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider,}  from 'react-router-dom'
import Navv from './Layout/Navv';
import FirstPage from './Pages/FirstPage';

const App = () => {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navv />}>
     <Route  index element={  < FirstPage  /> }/> 
     </Route>
    
    )
    );
    
  return (
    
    <RouterProvider  router={router} />
  
  )
}

export default App