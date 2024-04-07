import React from 'react'
import UpperNav from './UpperNav.tsx'
import BottomNav from './BottomNav.tsx';

const Navbar:React.FC = () => {
  return (
    <>
        <UpperNav />
        <BottomNav />
    </>
  )
}

export default Navbar;