import React from 'react';
import Navbar from './Navbars/Navbar.tsx'
import Footer from './Footer/Footer.tsx'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>

  )
}

export default Layout