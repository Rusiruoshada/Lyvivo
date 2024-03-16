import React from 'react'
import UpperNav from './Navbars/UpperNav.tsx'
import BottomNav from './Navbars/BottomNav.tsx';
import ImageSlider from './Carousel/Carousel.tsx';
import CategorySpace from './HomeShopByCategory/CategorySpace.tsx'
const ClientApp: React.FC  = () => {

  return (
    <>
        <UpperNav /> 
        <BottomNav />
        <ImageSlider />
        <CategorySpace />
        
    </>
  )
}

export default ClientApp;