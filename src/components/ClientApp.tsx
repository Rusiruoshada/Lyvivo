import React from 'react'

import ImageSlider from './Carousel/Carousel.tsx';
import CategorySpace from './HomeShopByCategory/CategorySpace.tsx'
import TextWithIcon from './UI/TextWithIcon.tsx';
import ProductSpace from './ProductArea/ProductSpace.tsx';

const ClientApp: React.FC  = () => {

  return (
    <>

        <ImageSlider />
        <TextWithIcon />
        <CategorySpace />
        <ProductSpace />
    </>
  )
}

export default ClientApp;