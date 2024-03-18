import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import { useDragScroll } from '../../../hooks/useDragScroll.ts';


const HomepageProduct = () => {

  const [ref] = useDragScroll();

  return (
    <div className='product-carousel overflow-hidden relative  p-6'>

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
