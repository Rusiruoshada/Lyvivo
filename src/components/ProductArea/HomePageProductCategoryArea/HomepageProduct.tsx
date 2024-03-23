import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import { useDragScroll } from '../../../hooks/useDragScroll.ts';

interface HomepageProductProps {
  
}

const HomepageProduct = () => {

  const [ref] = useDragScroll();
  const productTitle:string = 'Lyvivo Products';

  return (
    <div className='product-carousel overflow-hidden relative  p-6'>
      <h4>{productTitle}</h4>
      <div
        className='product-container grid grid-flow-col scroll-smooth transition-transform ease-out duration-500 justify-between overflow-x-scroll '
        ref={ref}
      >
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default HomepageProduct;
