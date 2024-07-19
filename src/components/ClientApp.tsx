import React from 'react';

import ImageSlider from './Carousel/Carousel.tsx';
import CategorySpace from './HomeShopByCategory/CategorySpace.tsx';
import TextWithIcon from './UI/TextWithIcon.tsx';
import ProductSpace from './ProductArea/ProductSpace.tsx';
import HomepageProduct from './ProductArea/HomePageProductCategoryArea/HomepageProduct.tsx';

const ClientApp: React.FC = () => {

  const productCarousel:any = [
    <HomepageProduct key={'bestSavings'} productTitle={'Best Savings'} />,
    <HomepageProduct key={'Groceries'} productTitle='Groceries' />,
    <HomepageProduct key={'Electronics'} productTitle='Electronics' />,
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
