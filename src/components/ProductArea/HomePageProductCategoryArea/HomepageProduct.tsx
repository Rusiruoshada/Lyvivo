import React from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import { Button } from 'antd';

const HomepageProduct = () => {
  return (
    <div className='product-carousel relative overflow-hidden p-6'>
      <Button className='pre-btn rounded absolute flex top-60 bttom-auto justify-center items-center border-0 '>
        &lt;
      </Button>
      <Button className='next-btn rounded absolute right-0 flex top-60 bttom-auto justify-center items-center border-0'>
        &gt;
      </Button>

      <div className='product-container px-2.5 flex scroll-smooth overflow-hidden'>
        <ItemCard />
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
