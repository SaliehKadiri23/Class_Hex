import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='w-full'>
      <Navbar/>

      <Outlet/>
      
      <Footer/>
    </div>
  )
}

export default Layout