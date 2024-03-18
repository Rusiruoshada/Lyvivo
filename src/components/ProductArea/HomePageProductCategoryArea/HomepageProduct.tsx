import React, { useState } from 'react';
import ItemCard from '../../UI/ItemCard.tsx';
import { Button } from 'antd';

const HomepageProduct = () => {
  const [current, setCurrent] = useState(0);

  const count = 8;

  const onPrev = () => {
    setCurrent((current) => (current === 0 ? count - 1 : current - 1));
  };
  const onNext = () => {
    setCurrent((current) => (current === count - 1 ? 0 : current + 1));
  };

  return (
    <div className='product-carousel overflow-hidden relative  p-6'>

        <Button className='pre-btn rounded border-1 absolute  flex top-60  justify-center items-center z-20' onClick={onPrev}>
          &lt;
        </Button>

        <Button className='next-btn rounded  border-1 absolute  flex top-60  justify-center items-center z-20 right-0' onClick={onNext}>
          &gt;
        </Button>


      <div
        className='product-container grid grid-flow-col scroll-smooth transition-transform ease-out duration-500 justify-between'
        style={{ transform: `translateX(-${current * 20}%)` }}
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
