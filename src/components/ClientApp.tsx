import React from 'react';

import ImageSlider from './Carousel/Carousel.tsx';
import CategorySpace from './HomeShopByCategory/CategorySpace.tsx';
import TextWithIcon from './UI/TextWithIcon.tsx';
import ProductSpace from './ProductArea/ProductSpace.tsx';
import HomepageProduct from './ProductArea/HomePageProductCategoryArea/HomepageProduct.tsx';

const ClientApp: React.FC = () => {

  const productCarousel:any = [
    <HomepageProduct productTitle='Best Savings' />,
    <HomepageProduct productTitle='Groceries' />,
    <HomepageProduct productTitle='Lyvivo Products' />,
  ];

  return (
    <>
      <ImageSlider />
      <TextWithIcon />
      <CategorySpace />
      <ProductSpace element={productCarousel} />


    </>
  );
};

export default ClientApp;
